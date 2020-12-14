import { GetStaticProps } from 'next'
import { ICategoryData } from '../../@types/api/categories'
import { Layout } from '../../components'
import Link from 'next/link'
import * as Ui from '@chakra-ui/react'
import { getAllCategories } from '../../data/categories'

interface CategoriesProps {
  categories: ICategoryData[]
}

export default function Categories({ categories }: CategoriesProps) {
  return (
    <Layout>
      <Ui.Heading size="lg" mb="6">
        Categorias
      </Ui.Heading>

      <Ui.List>
        {categories.map(category => (
          <Ui.ListItem key={category.id}>
            <Ui.Link>
              <Link href={`/categoria/${category.slug}`}>
                <a>{category.name}</a>
              </Link>
            </Ui.Link>
          </Ui.ListItem>
        ))}
      </Ui.List>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const categories = await getAllCategories()

  return {
    props: {
      categories,
    },
    revalidate: 5,
  }
}
