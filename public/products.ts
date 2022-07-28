export interface Products {
  img: string,
  name: string,
  precio: number,
  disponibilidad: number,
  categoria: string
}

const products: Products[] = [
  {
  img: 'https://www.cocacola.es/content/dam/one/es/es2/coca-cola/products/productos/dic-2021/CC_Origal.jpg',
  disponibilidad: 10,
  name: 'Coca Cola',
  precio: 1500,
  categoria: 'bebida'
  },
  {
    img: 'https://static.insales-cdn.com/images/products/1/2145/447572065/unnamed-1.jpg',
    disponibilidad: 11,
    name: 'Fanta',
    precio: 1300,
    categoria: 'bebida'
  },
  {
    img: 'https://jumbocolombiaio.vtexassets.com/arquivos/ids/186325/7702511000205.jpg?v=637813981865230000',
    disponibilidad: 11,
    name: 'Arroz Diana',
    precio: 1300,
    categoria: 'despensa'
  },
  {
    img: 'https://exitocol.vtexassets.com/arquivos/ids/13229238-1200-auto?v=637903044602400000&width=1200&height=auto&aspect=true',
    disponibilidad: 11,
    name: 'Club Colombia',
    precio: 15000,
    categoria: 'alcohol'
  },
  {
    img: 'https://exitocol.vtexassets.com/arquivos/ids/12797725-500-auto?v=637878987488470000&width=500&height=auto&aspect=true',
    disponibilidad: 11,
    name: 'Andina',
    precio: 12500,
    categoria: 'alcohol'
  },
  {
    img: 'https://exitocol.vtexassets.com/arquivos/ids/1973523-500-auto?v=637258925881570000&width=500&height=auto&aspect=true',
    disponibilidad: 11,
    name: 'Buchanans',
    precio: 144000,
    categoria: 'alcohol'
  },
  {
    img: 'https://exitocol.vtexassets.com/arquivos/ids/1976394-500-auto?v=637259126418500000&width=500&height=auto&aspect=true',
    disponibilidad: 11,
    name: 'Oliosoya',
    precio: 27000,
    categoria: 'despensa'
  },
  {
    img: 'https://exitocol.vtexassets.com/arquivos/ids/1976394-500-auto?v=637259126418500000&width=500&height=auto&aspect=true',
    disponibilidad: 11,
    name: 'Oliosoya',
    precio: 27000,
    categoria: 'despensa'
  },
  {
    img: 'https://exitocol.vtexassets.com/arquivos/ids/1239444-1200-auto?v=637181658717400000&width=1200&height=auto&aspect=true',
    disponibilidad: 11,
    name: 'Manuelita',
    precio: 7100,
    categoria: 'despensa'
  },
  {
    img: 'https://exitocol.vtexassets.com/arquivos/ids/9208229-1200-auto?v=637637065341700000&width=1200&height=auto&aspect=true',
    disponibilidad: 11,
    name: 'Harina Pan',
    precio: 4900,
    categoria: 'despensa'
  },
  {
    img: 'https://exitocol.vtexassets.com/arquivos/ids/13173598-1200-auto?v=637899387007830000&width=1200&height=auto&aspect=true',
    disponibilidad: 11,
    name: 'Cafe Aguila Roja',
    precio: 10800,
    categoria: 'despensa'
  },
  {
    img: 'https://exitocol.vtexassets.com/arquivos/ids/13173848-500-auto?v=637899411073670000&width=500&height=auto&aspect=true',
    disponibilidad: 11,
    name: 'Pony Malta',
    precio: 2500,
    categoria: 'babida'
  },
  {
    img: 'https://exitocol.vtexassets.com/arquivos/ids/1945556-500-auto?v=637256700428070000&width=500&height=auto&aspect=true',
    disponibilidad: 11,
    name: 'Agua con Gas',
    precio: 700,
    categoria: 'bebida'
  },
  {
    img: 'https://exitocol.vtexassets.com/arquivos/ids/13173923-500-auto?v=637899416944100000&width=500&height=auto&aspect=true',
    disponibilidad: 11,
    name: 'Coca Cola Zero',
    precio: 4000,
    categoria: 'bebida'
  }
  
]

export default products