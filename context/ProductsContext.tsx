import { createContext, useState } from "react";
import { Product } from "../public/products";

export interface Cart {
  product: Product,
  cant: number
}

interface InitValue {
  cart: Cart[],
  setCart: Function
}

export const ProductContext = createContext<InitValue>({cart:[], setCart: () => {}})


export const ProductsProvider = ({children}) => {
  const [cart, setCart] = useState<Cart[]>([])

  const value = {
    cart, setCart
  }

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}
