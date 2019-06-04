import React from "react"
import { Header, Footer } from "../../components"

import styles from "./Layout.module.scss"
import "../Cursor/cursor.scss"

const Layout = ({ children }) => {
  return (
    <>
      <canvas class="canvas" data-paper-resize />
      <div className={styles.Container}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
