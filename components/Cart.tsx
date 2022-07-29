import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Cart.module.css'
import { Cart as CartIn, ProductContext } from '../context/ProductsContext'

export const Cart = () => {
  const {cart, setCart} = useContext(ProductContext)
  let total = 0
  let count = 0
  cart.map(item => {
    count += item.cant * item.product.precio
    total = count
  })

  const handleDelete = (item1: CartIn) => {
    setCart((prev: CartIn[]) => {
      return prev.filter(item => item.product.id !== item1.product.id)
    })
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.container_bottom}>
        <div className={styles.flex_container}>
          <div>
            <h1>
              <FontAwesomeIcon fontSize={50} icon={faCartShopping} />
            </h1>
          </div>
          <div className={styles.total}>
            <h3>Total</h3>
            <h2>{total}</h2>
          </div>
          <div className={styles.cart}>
            {
              cart?.map((item, index) => (
                <div key={index} className={styles.cart_product}>
                  <p>{item.product?.name} x {item.cant}</p>
                  <FontAwesomeIcon onClick={() => handleDelete(item)} icon={faTrashCan}/>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
