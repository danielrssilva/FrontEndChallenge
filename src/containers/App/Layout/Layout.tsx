import React from "react";
import Navigation from "../Navigation";
import Main from "./Layout.styles";
import AppRouter from "../Router/Router";

const Layout = (): JSX.Element => {
  return (
    <>
      <Navigation />
      <Main>
        <AppRouter />
      </Main>
    </>
  );
};

export default Layout;
