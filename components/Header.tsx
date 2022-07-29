import React from 'react'
import styles from '../styles/Header.module.css'

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flex}><h1 className={styles.h1}>Ventas</h1></div>
    </div>
  )
}
