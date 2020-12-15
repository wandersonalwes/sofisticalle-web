import * as Ui from '@chakra-ui/react'
import { IProductData } from '../../@types/api/product'
import formatMoney from '../../utils/formatMoney'

interface ProductItemProps {
  product: IProductData
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <Ui.Box
      borderWidth="1px"
      borderRadius="sm"
      overflow="hidden"
      transition="0.2s"
      _hover={{
        boxShadow: 'base',
      }}
    >
      <Ui.Image
        w="full"
        h="200px"
        objectFit="cover"
        src={!product.images.length ? 'no-image.jpg' : product.images[0].url}
      />

      <Ui.Box p="6">
        <Ui.Box fontWeight="semibold" mt="1" as="h4" isTruncated>
          {product.name}
        </Ui.Box>

        <Ui.Text>
          {typeof product.price === 'number'
            ? formatMoney(product.price)
            : 'Preço sob consulta'}
        </Ui.Text>
      </Ui.Box>
    </Ui.Box>
  )
}
