import React from "react"

import styles from "./Header.module.scss"

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.Contact}>
        <p>+1 (470) 234 7709</p>
        <a href="mailto: jchpetty@gmail.com">jchpetty@gmail.com</a>
      </div>
    </div>
  )
}

export default Header
