import { GetStaticPaths, GetStaticProps } from 'next'
import { Layout, ProductItem } from '../../components'
import * as Ui from '@chakra-ui/react'
import { ICategoryData } from '../../@types/api/categories'
import {
  getAllCategories,
  getCategoryBySlug,
  getTotalCategories,
} from '../../data/categories'

interface CategoryProps {
  category: ICategoryData
}

export default function Category({ category }: CategoryProps) {
  return (
    <Layout>
      <Ui.Breadcrumb mb="6">
        <Ui.BreadcrumbItem>
          <Ui.BreadcrumbLink href="/">Página Inicial</Ui.BreadcrumbLink>
        </Ui.BreadcrumbItem>

        <Ui.BreadcrumbItem>
          <Ui.BreadcrumbLink href="/categorias">Categorias</Ui.BreadcrumbLink>
        </Ui.BreadcrumbItem>

        <Ui.BreadcrumbItem isCurrentPage>
          <Ui.BreadcrumbLink href="/">{category.name}</Ui.BreadcrumbLink>
        </Ui.BreadcrumbItem>
      </Ui.Breadcrumb>

      <Ui.Heading size="lg" mb="10">
        {category.name}
      </Ui.Heading>
      {category.products.length > 0 && (
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
          {category.products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </Ui.Grid>
      )}

      {category.products.length === 0 && (
        <Ui.Heading size="md">Nenhum produto encontrado.</Ui.Heading>
      )}
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfCategories = await getTotalCategories()
  const categories = await getAllCategories(`_limit=${numberOfCategories}`)

  return {
    paths: categories.map(category => {
      return {
        params: {
          slug: category.slug,
        },
      }
    }),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ctx => {
  const category = await getCategoryBySlug(ctx.params.slug)

  if (!category) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      category,
    },
    revalidate: 5,
  }
}
