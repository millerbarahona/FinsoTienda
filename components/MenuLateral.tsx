import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/MenuLateral.module.css'

export const MenuLateral = () => {

  return (
    <div className={styles.container}>
      <div className={styles.container_top}>
        <h1>
          <FontAwesomeIcon icon={faCartShopping}/>
        </h1>
      </div>
      <div className={styles.container_bottom}>
        <div className={styles.flex_container}>
          <div>
            <img src="/images/Logo.png" alt="Logo"  className={styles.logo}/>
          </div>
          <div >
            <div className={styles.list_options}>
            <p>Home</p>
            <p>Clientes</p>
            <p>Ventas</p>
            <p>Compras</p>
            <p>Caja</p>
            <p>Inventario</p>
            <p>Productos</p>
            <p>Reportes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
