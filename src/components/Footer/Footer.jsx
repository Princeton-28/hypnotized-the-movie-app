// import section
import React from 'react'
import styles from "./Footer.module.css";

// this our Footer component in which we pass the props "text" 
export default function Footer({text}) {
  return (
    <div className={styles.footer}>
      {text}
    </div>
  )
}
