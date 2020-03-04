import React from "react";
import { ApolloProvider } from "react-apollo";
import client from "../tools/client";
import AdminPane from "../components/Admin/AdminPane";
import IsAuth from "./_isAuth";
import WithMainLAyout from "../components/withMainLayout";


const Page = () => {
  return (
    <WithMainLAyout page={AdminPane} />
  );
}

const Admin = () => {
  return (
    <ApolloProvider client={client}>
      <IsAuth page={Page} />
    </ApolloProvider>
  );
};

export default Admin;
