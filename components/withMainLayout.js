import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import Header from "./common/Header";
import Sider from "./common/Sider";
import { ResetStyle, GlobalStyle } from "../assist/globalStyle";

const Wrapper = styled(Layout)`
  display: flex;
`;

const RightLayout = styled(Layout)`
  width: 100%;
`;

const mainLayout = input => {
  const { page } = input;
  const Page = page;
  return (
    <Wrapper>
      <ResetStyle />
      <GlobalStyle />
      <Sider />
      <RightLayout>
        <Header />
        <Page />
      </RightLayout>
    </Wrapper>
  );
};

export default mainLayout;
