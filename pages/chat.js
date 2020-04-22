import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";

const ChatBox = () => (
    <Layout>
        <Sidebar />
        <Wrapper>

            <InnerBoxWrapper>
                <InnerBox>
                    <input type="text"></input>
                </InnerBox>
            </InnerBoxWrapper>
            <h1>test</h1>
        </Wrapper>
    </Layout>
);

const Layout = styled.section`
  height: 100%;
  margin: 0;
  background: #7f7fd5;
  background: -webkit-linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
  background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
  border-radius: 15px !important;
  background-color: rgba(0, 0, 0, 0.4) !important;
`;

const Wrapper = styled.section`
  margin-top: auto;
  margin-bottom: auto;
  padding: 0.75rem 0 !important;
  overflow-y: auto;
  white-space: nowrap;
  border-radius: 15px 15px 0 0 !important;
  border-bottom: 0 !important;
margin-left: 10rem;
margin-right: 10rem;
`;

const InnerBox = styled.section`
<<<<<<< HEAD
  text-align: center;
  width: 100%;
  align-self: flex-end;
=======
text-align: center;
width: 100%;
align-self: flex-end;
>>>>>>> 7c9857c5fe732c8dd9c3d53e8b536ecf2cb7d085
`;

const InnerBoxWrapper = styled.section`
poistion: float;
  display: flex;
  height: 100vh;
  background: black;
  opacity: 0.5;

`;

const MessageBox = styled.input``;

export default ChatBox;
