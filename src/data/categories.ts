import { ICategoryData } from '../@types/api/categories'
import api from '../services/api'

export const getAllCategories = async (query = '') => {
  const { data: categories } = await api.get<ICategoryData[]>(
    `/categories?${query}`,
  )

  return categories
}

export const getCategoryBySlug = async (slug: string | string[]) => {
  const slugString = Array.isArray(slug) ? slug[0] : slug

  const { data: categoriesBySlug } = await api.get<ICategoryData[]>(
    `/categories?slug=${slugString}`,
  )

  if (!categoriesBySlug[0]) return null

  const category = categoriesBySlug[0]

  return category
}

export const getTotalCategories = async () => {
  const { data: numberOfCategories } = await api.get<number>(
    '/categories/count',
  )

  return numberOfCategories
}
