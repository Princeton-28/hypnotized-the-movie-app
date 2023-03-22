// import section
import React from 'react'
import styles from "./Header.module.css"


// header component that renders the header tag with the "text" and "text2" passed as props.
export default function Header({text, text2}) {
  return (
    <header className={styles.header}>
    <h2>{text}</h2>
    <h3>{text2}</h3>
  </header>
  )
}
