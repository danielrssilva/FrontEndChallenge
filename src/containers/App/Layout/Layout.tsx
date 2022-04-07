import React from "react";
import Navigation from "../Navigation";
import Main from "./Layout.style";
import AppRouter from "../Router/Router";

const Layout = (): JSX.Element => {
  return (
    <>
      <Main>
        <Navigation />
        <AppRouter />
      </Main>
    </>
  );
};

export default Layout;
