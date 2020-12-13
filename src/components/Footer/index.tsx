import Link from 'next/link'
import * as Ui from '@chakra-ui/react'
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5'

export default function Footer() {
  return (
    <Ui.Box borderTopWidth="1px" py="2rem" as="footer" mt="4rem">
      <Ui.Container maxW="1200px">
        <Ui.Grid
          display={{ base: 'block', sm: 'grid' }}
          gap="10"
          w="full"
          gridTemplateColumns="repeat(3, 1fr)"
        >
          <Ui.GridItem mb="10">
            <Ui.Image mb="5" src="/logo.png" maxW="200px" />
            <Ui.Text color="gray.600" maxW="350px">
              Lojas de móveis e eletrodomésticos em Goiânia.
            </Ui.Text>
          </Ui.GridItem>
          <Ui.GridItem mb="10">
            <Ui.Heading as="h3" size="md" mb="5">
              Navegação
            </Ui.Heading>
            <Ui.List>
              <Ui.ListItem>
                <Link href="/produtos">
                  <Ui.Link>Produtos</Ui.Link>
                </Link>
              </Ui.ListItem>

              <Ui.ListItem>
                <Link href="/categorias">
                  <Ui.Link>Categorias</Ui.Link>
                </Link>
              </Ui.ListItem>
            </Ui.List>
          </Ui.GridItem>

          <Ui.GridItem>
            <Ui.Heading as="h3" size="md" mb="5">
              Redes Sociais
            </Ui.Heading>

            <Ui.List>
              <Ui.ListItem>
                <Ui.ListIcon w="18px" h="18px" as={IoLogoFacebook} />
                <Ui.Link href="https://facebook.com/sofisticalle" isExternal>
                  Facebook
                </Ui.Link>
              </Ui.ListItem>

              <Ui.ListItem>
                <Ui.ListIcon w="18px" h="18px" as={IoLogoInstagram} />
                <Ui.Link href="https://instagram.com/sofisticalle" isExternal>
                  Instagram
                </Ui.Link>
              </Ui.ListItem>
            </Ui.List>
          </Ui.GridItem>
        </Ui.Grid>
      </Ui.Container>
    </Ui.Box>
  )
}
