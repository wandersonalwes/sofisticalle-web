import * as Ui from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import { IProductData } from '../../@types/api/product'
import { Layout, ProductItem } from '@/components/all'
import { getAllProducts } from '../../data/products'
import Link from 'next/link'

interface ProductsProps {
  products: IProductData[]
}

export default function Products({ products }: ProductsProps) {
  return (
    <Layout>
      <Ui.Heading size="lg" mb="6">
        Lista de Produtos
      </Ui.Heading>
      <Ui.Grid
        mb="10"
        templateColumns={{
          base: 'repeat(2, minmax(0, 1fr))',
          sm: 'repeat(3, minmax(0, 1fr))',
          md: 'repeat(4, minmax(0, 1fr))',
          lg: 'repeat(5, minmax(0, 1fr))',
        }}
        gap={4}
      >
        {products.map(product => (
          <Link key={product.id} href={`/produto/${product.slug}`}>
            <a>
              <ProductItem product={product} />
            </a>
          </Link>
        ))}
      </Ui.Grid>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getAllProducts()
  return {
    props: {
      products,
    },
    revalidate: 5,
  }
}
