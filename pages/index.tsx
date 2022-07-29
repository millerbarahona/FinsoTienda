import { useEffect, useState } from 'react'
import { Cart } from '../components/Cart'
import { Header } from '../components/Header'
import { ListProducts } from '../components/ListProducts'
import { MenuLateral } from '../components/MenuLateral'
import { Search } from '../components/Search'
import { ProductsProvider } from '../context/ProductsContext'
import { Product } from '../public/products'
import styles from '../styles/Home.module.css'

interface Props {
  products: Product[]
}

const Home = (props: Props) => {
  const [products, setProducts] = useState(props.products)

  return (
    <ProductsProvider>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <Header />
        </div>
        <aside className={styles.aside}>
          <MenuLateral />
        </aside>
        <main className={styles.main}>
          <div className={styles.search}>
            <Search />
          </div>
          <ListProducts products={products} />
        </main>
        <aside className={styles.cart}>
          <Cart />
        </aside>
      </div>
    </ProductsProvider>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/products')
  const json = await res.json()
  console.log('g')
  return {
    props: {
      products: json
    }
  }
}

export default Home
