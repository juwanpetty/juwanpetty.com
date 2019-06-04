import React from "react"
import { Header, Footer } from "../../components"

import styles from "./Layout.module.scss"

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.Container}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
