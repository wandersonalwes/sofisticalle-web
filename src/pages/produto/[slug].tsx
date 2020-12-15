import { GetStaticPaths, GetStaticProps } from 'next'
import { IProductData } from '../../@types/api/product'
import formatMoney from '../../utils/formatMoney'
import Slider from 'react-slick'
import * as Ui from '@chakra-ui/react'
import { IoLogoWhatsapp } from 'react-icons/io5'
import Error from 'next/error'

import {
  getAllProducts,
  getProduct,
  getTotalProducts,
} from '../../data/products'

import { Layout } from '@/components/all'
import { useRouter } from 'next/router'

interface Productrops {
  product: IProductData
}

export default function Product({ product }: Productrops) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Carregando...</div>
  }

  if (!product) {
    return <Error statusCode={404} />
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Layout>
      <Ui.Container maxWidth="1200px">
        <Ui.Breadcrumb mb="10">
          <Ui.BreadcrumbItem>
            <Ui.BreadcrumbLink href="/">Página Inicial</Ui.BreadcrumbLink>
          </Ui.BreadcrumbItem>

          <Ui.BreadcrumbItem>
            <Ui.BreadcrumbLink href={`/categoria/${product.category.slug}`}>
              {product.category.name}
            </Ui.BreadcrumbLink>
          </Ui.BreadcrumbItem>

          <Ui.BreadcrumbItem isCurrentPage>
            <Ui.BreadcrumbLink href="/">{product.name}</Ui.BreadcrumbLink>
          </Ui.BreadcrumbItem>
        </Ui.Breadcrumb>

        <Ui.Box
          display={{ base: 'block', md: 'grid' }}
          gridTemplateColumns="repeat(3, minmax(0, 1fr))"
          gridGap="10"
        >
          <Ui.GridItem mb="10" colStart={1} colEnd={3} maxW="100%">
            {!!product.images.length && (
              <Slider {...settings}>
                {product.images.map(image => (
                  <img
                    key={image.id}
                    src={image.url}
                    alt={image.alternativeText}
                  />
                ))}
              </Slider>
            )}

            {!product.images.length && (
              <Slider>
                <img src="/no-image.jpg" alt="sem imagem" />
              </Slider>
            )}
          </Ui.GridItem>

          <Ui.Box>
            <Ui.Heading mb="5" size="lg">
              {product.name}
            </Ui.Heading>

            <Ui.Text mb="5">
              {typeof product.price === 'number'
                ? formatMoney(product.price)
                : 'Preço sob consulta'}
            </Ui.Text>

            {product.description && (
              <div dangerouslySetInnerHTML={{ __html: product.description }} />
            )}

            <Ui.Button
              leftIcon={<Ui.Icon as={IoLogoWhatsapp} />}
              mt="5"
              size="lg"
              w="full"
              colorScheme="green"
              onClick={() =>
                window.open(
                  `https://wa.me/+5562993395065?text=Olá, Tenho interesse neste item: https://sofisticalle.com/produto/${product.slug}`,
                  '_blank',
                )
              }
            >
              EU QUERO
            </Ui.Button>
          </Ui.Box>
        </Ui.Box>
      </Ui.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfProducts = await getTotalProducts()
  const products = await getAllProducts(`_limit=${numberOfProducts}`)
  return {
    paths: products.map(product => {
      return {
        params: {
          slug: product.slug,
        },
      }
    }),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ctx => {
  const product = await getProduct(ctx.params.slug)

  if (!product) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      product,
    },
    revalidate: 1,
  }
}
