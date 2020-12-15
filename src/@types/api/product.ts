export interface IProductCategory {
  id: number
  name: string
  slug: string
  published_at: string
  created_at: string
  updated_at: string
}

export interface IProductImageFormat {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: null
  size: number
  width: number
  height: number
  provider_metadata: {
    public_id: string
    resource_type: string
  }
}

export interface IProductImage {
  id: number
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: {
    thumbnail: IProductImageFormat
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: {
    public_id: string
    resource_type: string
  }
  created_at: string
  updated_at: string
}

export interface IProductData {
  id: number
  name: string
  description?: string
  price?: number
  slug: string
  category?: IProductCategory
  published_at: string
  created_at: string
  updated_at: string
  images?: IProductImage[]
}
