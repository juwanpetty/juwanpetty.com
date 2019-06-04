import React from "react"
import { Link } from "gatsby"

import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Link to="/about" data-cursor className={styles.FooterLink}>
        About
      </Link>
      <Link to="/work" data-cursor className={styles.Archive}>
        Archive <span>23</span>
      </Link>
    </footer>
  )
}

export default Footer
