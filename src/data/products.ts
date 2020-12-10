import { IProductData } from '../@types/api/product'
import api from '../services/api'
import markdownToHtml from '../utils/markdownToHtml'

export const getAllProducts = async (query = '') => {
  const { data } = await api.get(`/products?&${query}`)

  const products: IProductData[] = data

  return products
}

export const getProduct = async (slug: string | string[]) => {
  const slugString = Array.isArray(slug) ? slug[0] : slug

  const { data } = await api.get<IProductData[]>(`/products?slug=${slugString}`)

  if (!data[0]) return null

  const product: IProductData = data[0]

  const description = await markdownToHtml(product.description)

  return { ...product, description }
}

export const getTotalProducts = async () => {
  const { data } = await api.get('/products/count')

  const numberOfPosts: number = data

  return numberOfPosts
}
