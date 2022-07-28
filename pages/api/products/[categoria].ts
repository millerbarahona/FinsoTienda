import { NextApiRequest, NextApiResponse } from "next";
import products from "../../../public/products";

export default function handler (req: NextApiRequest, res:NextApiResponse) {
  const { query: { categoria } } = req;
  const list_products = products.filter((product) => product.categoria === categoria)
  res.status(200).json(list_products)
}