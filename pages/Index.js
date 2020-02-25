import React from "react";
import { ApolloProvider } from "react-apollo";
import client from "../tools/client";
import Admins from "../components/Admins";
import IsAuth from "./_isAuth";
import WithMainLAyout from "../components/withMainLayout";


const Page = () => {
  return (
    <WithMainLAyout page={Admins} />
  );
}

const Index = () => {
  return (
    <ApolloProvider client={client}>
      <IsAuth page={Page} />
    </ApolloProvider>
  );
};

export default Index;
