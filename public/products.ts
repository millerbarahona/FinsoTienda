export interface Product {
  id: number,
  img: string,
  name: string,
  precio: number,
  disponibilidad: number,
  categoria: string
}

const products: Product[] = [
  {
    id: 1,
    img: 'https://www.cocacola.es/content/dam/one/es/es2/coca-cola/products/productos/dic-2021/CC_Origal.jpg',
    disponibilidad: 10,
    name: 'Coca Cola',
    precio: 1500,
    categoria: 'bebida'
  },
  {
    id: 2,
    img: 'https://static.insales-cdn.com/images/products/1/2145/447572065/unnamed-1.jpg',
    disponibilidad: 11,
    name: 'Fanta',
    precio: 1300,
    categoria: 'bebida'
  },
  {
    id: 3,
    img: 'https://jumbocolombiaio.vtexassets.com/arquivos/ids/186325/7702511000205.jpg?v=637813981865230000',
    disponibilidad: 11,
    name: 'Arroz Diana',
    precio: 1300,
    categoria: 'despensa'
  },
  {
    id: 4,
    img: 'https://exitocol.vtexassets.com/arquivos/ids/13229238-1200-auto?v=637903044602400000&width=1200&height=auto&aspect=true',
    disponibilidad: 11,
    name: 'Club Colombia',
    precio: 15000,
    categoria: 'alcohol'
  },
  {
    id: 5,
    img: 'https://exitocol.vtexassets.com/arquivos/ids/12797725-500-auto?v=637878987488470000&width=500&height=auto&aspect=true',
    disponibilidad: 11,
    name: 'Andina',
    precio: 12500,
    categoria: 'alcohol'
  },
  {
    id: 6,
    img: 'https://exitocol.vtexassets.com/arquivos/ids/1973523-500-auto?v=637258925881570000&width=500&height=auto&aspect=true',
    disponibilidad: 11,
    name: 'Buchanans',
    precio: 144000,
    categoria: 'alcohol'
  },
  {
    id: 7,
    img: 'https://exitocol.vtexassets.com/arquivos/ids/1976394-500-auto?v=637259126418500000&width=500&height=auto&aspect=true',
    disponibilidad: 11,
    name: 'Oliosoya',
    precio: 27000,
    categoria: 'despensa'
  },
  {
    id: 8,
    img: 'https://exitocol.vtexassets.com/arquivos/ids/1976394-500-auto?v=637259126418500000&width=500&height=auto&aspect=true',
    disponibilidad: 11,
    name: 'Oliosoya',
    precio: 27000,
    categoria: 'despensa'
  },
  {
    id: 9,
    img: 'https://exitocol.vtexassets.com/arquivos/ids/1239444-1200-auto?v=637181658717400000&width=1200&height=auto&aspect=true',
    disponibilidad: 11,
    name: 'Manuelita',
    precio: 7100,
    categoria: 'despensa'
  },
  {
    id: 10,
    img: 'https://exitocol.vtexassets.com/arquivos/ids/9208229-1200-auto?v=637637065341700000&width=1200&height=auto&aspect=true',
    disponibilidad: 11,
    name: 'Harina Pan',
    precio: 4900,
    categoria: 'despensa'
  },
  {
    id: 11,
    img: 'https://exitocol.vtexassets.com/arquivos/ids/13173598-1200-auto?v=637899387007830000&width=1200&height=auto&aspect=true',
    disponibilidad: 11,
    name: 'Cafe Aguila Roja',
    precio: 10800,
    categoria: 'despensa'
  },
  {
    id: 12,
    img: 'https://exitocol.vtexassets.com/arquivos/ids/13173848-500-auto?v=637899411073670000&width=500&height=auto&aspect=true',
    disponibilidad: 11,
    name: 'Pony Malta',
    precio: 2500,
    categoria: 'babida'
  },
  {
    id: 13,
    img: 'https://exitocol.vtexassets.com/arquivos/ids/1945556-500-auto?v=637256700428070000&width=500&height=auto&aspect=true',
    disponibilidad: 11,
    name: 'Agua con Gas',
    precio: 700,
    categoria: 'bebida'
  },
  {
    id: 14,
    img: 'https://exitocol.vtexassets.com/arquivos/ids/13173923-500-auto?v=637899416944100000&width=500&height=auto&aspect=true',
    disponibilidad: 11,
    name: 'Coca Cola Zero',
    precio: 4000,
    categoria: 'bebida'
  }

]

export default products