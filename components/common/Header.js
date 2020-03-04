import React from "react";
import Link from "next/link";
import styled from "styled-components";
import color from "../../assist/color";
import { LogoutOutlined } from "@ant-design/icons";

const Wrapper = styled.div`
  background-color: ${color.primary};
  padding: 15px 20px;
  display: flex;
  justify-content: flex-end;
`;

const IconSetting = styled(LogoutOutlined) `
  font-size: 1.2rem;
`

const IconLogout = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
`
const TextLogout = styled.span`
  margin-right: 5px;
`

const Item = styled.div``;

const Nav = () => (
  <Wrapper>
    <Item>
      <Link href="/">
        <IconLogout>
          <TextLogout>登出</TextLogout>
          <IconSetting />
        </IconLogout>
      </Link>
    </Item>
  </Wrapper>
);

export default Nav;
