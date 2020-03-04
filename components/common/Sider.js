import React from "react";
import styled from "styled-components";
import color from "../../assist/color";
import Link from "next/link";

const Wrapper = styled.div`
  min-width: 160px;
  height: 100vh;
  padding: 60px 0px;
  border-right: ${color.primary} solid 1px;
`;

const Item = styled.div`
  height: 40px;
  line-height: 40px;
  min-width: 100px;
  padding: 0px 20px;
  border-bottom: ${color.primary} solid 1px;
  cursor: pointer;

  &:hover {
    background-color: ${color.primary};
  }
`;

/*
const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
].map(link => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`,
}))
*/

const Sider = () => {
  return (
    <Wrapper>
      <Link href="/admin">
        <Item>管理者管理</Item>
      </Link>
      <Link href="/patient">
        <Item>病人管理</Item>
      </Link>
      <Item>Sider</Item>
      <Item>Sider</Item>
    </Wrapper>
  );
};

export default Sider;
