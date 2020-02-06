import React, { useState, useEffect } from 'react';
import { ApolloClient, gql } from 'apollo-boost';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import styled from 'styled-components';
import Nav from '../components/Nav';


const client = new ApolloClient({
  uri: 'http://localhost:8081/api',
});


const StateContainer = styled.div`
  padding: 30px;
  margin-left: 5%;
  margin-bottom: 30px;
  width: 80%;
  background-color: burlywood;
`;

const CountContainer = styled.div`
  padding: 30px;
  margin-left: 5%;
  width: 80%;
  background-color: steelblue;
`;

const ADMINS = gql`
  {
    admins{
      id
      key
      name
      created_at
    }
  }
`;

const Index = (data) => {
  const [count, setCount] = useState(0);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div>
        <StateContainer>
          <h2>Data from getInitialProps</h2>
          {data.title}
        </StateContainer>
        <CountContainer>
          <h2>Set State Demo</h2>
          <span>You clicked </span>
          <span>{count}</span>
          <span> times</span>
          <br />
          <button type="button" onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </CountContainer>
      </div>
    </ApolloProvider>
  );
};

Index.getInitialProps = async () => {
  const { loading, error, data } = useQuery(ADMINS);
  if (loading) return { loading: true };
  if (error) return { error: true };

  return { title: 'hello world', data };
};

export default Index;
