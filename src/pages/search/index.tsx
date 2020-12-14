import * as Ui from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { IProductData } from '../../@types/api/product'
import { Layout, ListProducts, ProductItem } from '../../components'
import { searchProducts } from '../../data/products'
import Link from 'next/link'

interface SearchProps {
  products: IProductData[]
}

export default function Search({ products }: SearchProps) {
  const router = useRouter()

  return (
    <Layout>
      {products.length > 0 && (
        <>
          <Ui.Heading size="lg" mb="6">
            Resultados da Pesquisa: {router.query.q}
          </Ui.Heading>

          <ListProducts>
            {products.map(product => (
              <Link key={product.id} href={`/produto/${product.slug}`}>
                <a>
                  <ProductItem product={product} />
                </a>
              </Link>
            ))}
          </ListProducts>
        </>
      )}

      {products.length === 0 && (
        <Ui.Heading size="lg">
          Nenhum produto encontrado para o termo: {router.query.q}
        </Ui.Heading>
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { q = '' },
}) => {
  const products = await searchProducts(q)

  return {
    props: {
      products,
    },
  }
}
