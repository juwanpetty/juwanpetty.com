import React from "react"
import { Link } from "gatsby"

import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Link to="/about" data-cursor className={styles.FooterLink}>
        About
      </Link>
      <Link to="/" data-cursor className={styles.FooterLink}>
        CV
      </Link>
    </footer>
  )
}

export default Footer
