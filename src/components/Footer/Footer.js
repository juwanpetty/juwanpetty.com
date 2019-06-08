import React from "react"
import Resume from "../../assets/juwan-petty-resume.pdf"
import styles from "./Footer.module.scss"

const Footer = () => {
  console.log(Resume)

  return (
    <footer className={styles.Footer}>
      <a
        href={Resume}
        data-cursor
        className={styles.FooterLink}
        download
        alt="Juwan Petty Resume"
      >
        CV
      </a>
    </footer>
  )
}

export default Footer
