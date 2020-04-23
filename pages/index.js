import React from 'react';
import styled from 'styled-components';

export default function App() {
  return(
    <>
    <Layout>
      <h1>Welcome</h1>
    </Layout>
    </>
  )
}

const Layout = styled.section`
  height: 100vh;
  margin: 0;
  background: #7f7fd5;
  background: -webkit-linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
  background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
  border-radius: 15px !important;
  background-color: rgba(0, 0, 0, 0.4) !important;
  display: flex;
`;