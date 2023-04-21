import React from "react";

import Sidebar from "@shared/Sidebar/Sidebar";

import "../styles/globals.scss";
import styles from "./layout.module.scss";

if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
  const ReactDOM = require("react-dom");
  const axe = require("@axe-core/react");
  axe(React, ReactDOM, 1000);
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={styles.Container}>
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
