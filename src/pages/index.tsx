import { GetStaticProps } from 'next'
import Link from 'next/link'
import { IProductData } from '../@types/api/product'
import { getAllProducts } from '../data/products'

import { AiFillFire } from 'react-icons/ai'

import * as Ui from '@chakra-ui/react'
import { Layout, ProductItem } from '@/components/all'

interface HomeProps {
  products: IProductData[]
}

export default function Home({ products }: HomeProps) {
  return (
    <Layout>
      <Ui.Image mb="10" src="/hero-banner.jpg" />
      <Ui.Flex mx="auto" mb="6">
        <Ui.Icon mr="2" w="5" h="5" color="red.500" as={AiFillFire} />
        <Ui.Heading as="h2" size="md">
          Produtos em Destaque
        </Ui.Heading>
      </Ui.Flex>
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

      <Link href="/produtos">
        <Ui.Button
          cursor="pointer"
          as="a"
          w="full"
          size="lg"
          colorScheme="yellow"
        >
          Ver todos os produtos
        </Ui.Button>
      </Link>
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
