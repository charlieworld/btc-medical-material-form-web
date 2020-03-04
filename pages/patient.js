import React from "react";
import { ApolloProvider } from "react-apollo";
import client from "../tools/client";
import Patients from "../components/Patient/Patients";
import IsAuth from "./_isAuth";
import WithMainLAyout from "../components/withMainLayout";

const Page = () => {
  return <WithMainLAyout page={Patients} />;
};

const Patient = () => {
  return (
    <ApolloProvider client={client}>
      <IsAuth page={Page} />
    </ApolloProvider>
  );
};

export default Patient;
