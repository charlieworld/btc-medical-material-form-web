import React from "react";
import styled from "styled-components";
import color from "../../assist/color";

const Wrapper = styled.div`
  height: 100vh;
  padding: 60px 0px;
  border-right: ${color.primary} solid 1px;
`;

const Item = styled.div`
  height:40px;
  line-height:40px;
  min-width: 100px;
  padding: 0px 20px;
  border-bottom: ${color.primary} solid 1px;
  cursor: pointer;

  &:hover {
    background-color: ${color.primary};
  }
`;

const Sider = () => (
  <Wrapper>
    <Item>Sider</Item>
    <Item>Sider</Item>
    <Item>Sider</Item>
    <Item>Sider</Item>
  </Wrapper>
);

export default Sider;
