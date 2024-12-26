import React from 'react'
import styles from "./styles.module.css";

console.log("A", styles);


function A() {
  return (
    <header className={styles.header}>
    <div className={styles.title}>A</div>
    </header>
  )
}

export default A