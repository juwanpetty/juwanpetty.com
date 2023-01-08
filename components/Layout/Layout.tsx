import React, { Fragment } from "react";

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
    </Fragment>
  );
};

export default Layout;
