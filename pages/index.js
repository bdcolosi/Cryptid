import { Component } from "react";
import io from "socket.io-client";
import fetch from "isomorphic-unfetch";

export default class Index extends Component {
  //fetch message from the server
  static async getInitialProps({ req }) {
    const response = await fetch("https://next-socket-io.now.sh/messages");
    const messages = await response.json();
    return { messages };
  }

  static defaultProps = {
    messages: [],
  };

  state = {
    field: "",
    messages: this.props.messages,
  };

  componentDidMount() {
    this.socket = io("https://next-socket-io.now.sh/");
    this.socket.on("message", this.handleMessage);
  }

  componentWillUnmount() {
    this.socket.off("message", this.handleMessage);
    this.socket.close();
  }

  handleChange = (event) => {
    this.setState({ field: event.target.value });
  };

  handleSubmint = (event) => {
    event.preventDefault();

    const message = {
      id: new Date().getTime(),
      value: this.state.field,
    };

    this.socket.emit("message", message);

    this.setState((state) => ({
      feild: "",
      messages: state.messages.concat(message),
    }));
  };

  render() {
    return (
      <>
        <section>
          <ul>
            {this.state.messages.map((message) => (
              <li key={message.id}>{message.value}</li>
            ))}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              type="text"
              placeholder="Message Here"
              value={this.state.field}
            />
            <button>Send</button>
          </form>
        </section>
      </>
    );
  }
}
