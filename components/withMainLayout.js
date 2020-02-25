import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import Header from "./common/Header";
import Sider from "./common/Sider";

const Wrapper = styled(Layout)`
  display: flex
`


const mainLayout = input => {
  const { page } = input;
  const Page = page;
  return (
    <Wrapper>
      <Sider />
      <Layout>
        <Header />
        <Page />
      </Layout>
    </Wrapper>
  );
};

export default mainLayout;
