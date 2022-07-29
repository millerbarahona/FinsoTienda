import React, { useContext, useState } from 'react'
import { ProductContext, Cart} from '../context/ProductsContext'
import { Product } from '../public/products'
import styles from '../styles/Product.module.css'

interface Props {
  product: Product
}

export const ProductCard = (props: Props) => {
  const [count, setCount] = useState(0)
  const {setCart} = useContext(ProductContext)

  const handleMinus = () => {
    if(count === 0) {
      
    }else {
      setCount(prev => prev - 1)

      setCart((prev:Cart[]) => {
        const prod = prev.filter( item => item?.product?.id === props.product.id)
        if(prod.length > 0){
          console.log(prod[1]?.cant )
          if(prod[1]?.cant - 1 ===  0){
            return [...prev.filter(item => item.product.id !== prod[0].product.id)]
          }
          return [...prev.map(function (item) {
            return item.product.id === prod[0].product.id ? {cant: count - 1, product: props.product}: item
          })]
        }else {
          return [...prev, {product:props.product, cant: count - 1}]
        }
      })
    }
  }

  const handlePlus = async () => {
    setCount(prev => prev + 1)
    setCart((prev:Cart[]) => {
      const prod = prev.filter( item => item?.product?.id === props.product.id)
      if(prod.length > 0){
        return [...prev.map(function (item) {
          return item.product.id === prod[0].product.id ? {cant: count + 1, product: props.product}: item
        })]
      }else {
        return [...prev, {product:props.product, cant: count + 1}]
      }
    })
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.flex}>
          <img src={props.product.img} alt={props.product.name} className={styles.img} />
          <p>{props.product.name}</p>
          <p><b>{props.product.precio}</b></p>
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => handleMinus()}>-</button>
        <div>{count}</div>
        <button onClick={() => handlePlus()}>+</button>
      </div>
    </div>
  )
}
