import React, { Fragment } from "react";

import Footer from "./Footer";
import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Fragment>
      <div className="min-h-screen">
        <Navigation />
        <main>{children}</main>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
