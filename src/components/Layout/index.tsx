import Footer from '../Footer'
import Header from '../Header'
import * as Ui from '@chakra-ui/react'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <Ui.Container maxW="1200px">{children}</Ui.Container>
      <Footer />
    </div>
  )
}
