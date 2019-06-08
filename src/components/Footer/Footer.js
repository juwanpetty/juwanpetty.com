import React from "react"
import { Link } from "gatsby"

import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Link to="/" data-cursor className={styles.FooterLink}>
        CV
      </Link>
    </footer>
  )
}

export default Footer
