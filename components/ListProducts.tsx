import React, { useState } from 'react'
import { Product } from '../public/products'
import styles from '../styles/List.module.css'
import { ProductCard } from './ProductCard'
import { Search } from './Search'

interface Props {
  products?: Product[]
}

export const ListProducts = (props: Props) => {
  
  return (
    <div>
      <div className={styles.list}>
          {
            props.products?.map((item, index) => (
              <ProductCard product={item} key={item.id}/>
            ))
          }
        </div>
    </div>
  )
}
