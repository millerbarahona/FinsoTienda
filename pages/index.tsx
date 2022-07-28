import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { MenuLateral } from '../components/MenuLateral'
import { Products } from '../public/products'
import styles from '../styles/Home.module.css'

interface Props {
  products: Products[]
}

const Home = (props: Props) => {
  const [products, setProducts] = useState(props.products)

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <MenuLateral />
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '1em', marginTop: '2em' }}>
            {
              products?.map(item => (
                <div key={item.name!}>
                  <img src={item.img} alt="" style={{ width: '100px', borderRadius: '10px' }} />
                  <h2>{item.name}</h2>
                  <h4>{item.precio}</h4>
                </div>
              ))
            }
          </div>
        </main>
      </div>

    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/products')
  const json = await res.json()

  return {
    props: {
      products: json
    }
  }
}

export default Home
