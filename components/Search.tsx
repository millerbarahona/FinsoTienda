import React from 'react'
import styles from '../styles/Search.module.css'

export const Search = () => {
  return (
    <div className={styles.container}>
      <input type="text" className={styles.input} placeholder="Buscar Producto"/>
    </div>
  )
}
