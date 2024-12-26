import React from 'react'
import styles from "./styles.module.css"

console.log("B" , styles);

function B() {
  return (
    <header className={styles.header}>
    <div  className={styles.title}>B</div>
    </header>
  )
}

export default B