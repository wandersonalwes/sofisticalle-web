import { IProductCategory, IProductData } from './product'

export interface ICategoryData extends IProductCategory {
  products: IProductData[]
}
