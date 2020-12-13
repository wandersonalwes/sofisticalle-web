import { ICategoryData } from '../@types/api/categories'
import api from '../services/api'

export const getAllCategories = async () => {
  const { data } = await api.get<ICategoryData[]>('/categories')

  return data
}
