import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { Link } from "react-router-dom";
import Container from "./Navigation.style";

const Navigation = (): JSX.Element => {
  return (
    <Header>
      <Menu theme='dark' mode='horizontal'>
        <Link to='/'>Home</Link>
      </Menu>
    </Header>
  );
};

export default Navigation;
