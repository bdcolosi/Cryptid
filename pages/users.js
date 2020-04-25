import React from "react";
import styled from "styled-components";
import axios from 'axios';

const TestApi = (props) => {
    const [testApi, setTestApi] = React.useState('');

    axios.get('http://localhost:3001/api/login')
        .then(response => response.data)
        .then(response => setTestApi(response))

    return (
        <p>{testApi}</p>
    )
}



export default TestApi;
