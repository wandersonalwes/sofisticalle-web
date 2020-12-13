import * as Ui from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ListProductsProps {
  children: ReactNode
}

export default function ListProducts({ children }: ListProductsProps) {
  return (
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
      {children}
    </Ui.Grid>
  )
}
