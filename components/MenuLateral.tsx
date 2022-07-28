import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/MenuLateral.module.css'
import logo from '../public/Logo.png'

export const MenuLateral = () => {

  return (
    <div className={styles.container}>
      <div className={styles.container_top}>
        <h1>
          <FontAwesomeIcon icon={faCartShopping}/>
        </h1>
      </div>
      <div className={styles.container_bottom}>
        <img src="/public/Logo.png" alt="" />
      </div>
    </div>
  )
}
