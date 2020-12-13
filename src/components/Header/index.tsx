import * as Ui from '@chakra-ui/react'
import Link from 'next/link'
import {
  IoSearchOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoMailOutline,
  IoLogoWhatsapp,
} from 'react-icons/io5'

import { CgMenuRight } from 'react-icons/cg'

export default function Header() {
  return (
    <>
      <Ui.Box background="gray.800">
        <Ui.Flex
          justifyContent={{ base: 'center', md: 'space-between' }}
          alignItems="center"
          maxW="1200px"
          mx="auto"
          color="gray.500"
          px="6"
          py="2"
        >
          <Ui.Link
            href="mailto:contato@sofisticalle.com"
            isExternal
            display={{ base: 'none', md: 'flex' }}
            alignItems="center"
          >
            <Ui.Icon as={IoMailOutline} w="18px" h="18px" mr="3" />
            <Ui.Text>E-mail: contato@sofisticalle.com</Ui.Text>
          </Ui.Link>

          <Ui.Link
            display="flex"
            isExternal
            href="https://wa.me/+5562993395065"
            alignItems="center"
          >
            <Ui.Icon as={IoLogoWhatsapp} w="18px" h="18px" mr="3" />
            <Ui.Text>Whatsapp: (62) 99339-5065</Ui.Text>
          </Ui.Link>
        </Ui.Flex>
      </Ui.Box>
      <Ui.Box as="header" width="full" mb="10">
        <Ui.Flex
          justify="space-between"
          alignItems="center"
          maxW="1200px"
          height="4.5rem"
          mx="auto"
          px="6"
        >
          <Link href="/">
            <a>
              <Ui.Image maxHeight="60px" src="/logo.png" />
            </a>
          </Link>

          <Ui.Flex alignItems="center" maxW="824px" w="100%" justify="flex-end">
            <Ui.FormControl action="search" mx="6" as="form">
              <Ui.InputGroup display={{ base: 'none', md: 'block' }} size="lg">
                <Ui.InputLeftElement
                  alignItems="center"
                  pointerEvents="none"
                  children={
                    <Ui.Icon
                      w="24px"
                      h="24px"
                      color="gray.500"
                      as={IoSearchOutline}
                    />
                  }
                />

                <Ui.Input name="q" placeholder="Buscar um produto..." />
              </Ui.InputGroup>
            </Ui.FormControl>
            <Ui.Box display={{ base: 'none', md: 'flex' }} spacing="5">
              <Link href="https://facebook.com/sofisticalle">
                <a>
                  <Ui.Icon
                    color="gray.400"
                    w="24px"
                    h="24px"
                    as={IoLogoFacebook}
                    transition="0.2s"
                    _hover={{
                      color: 'gray.600',
                    }}
                  />
                </a>
              </Link>
              <Link href="https://instagram.com/sofisticalle">
                <a>
                  <Ui.Icon
                    color="gray.400"
                    marginLeft="2"
                    w="24px"
                    h="24px"
                    transition="0.2s"
                    as={IoLogoInstagram}
                    _hover={{
                      color: 'gray.600',
                    }}
                  />
                </a>
              </Link>
            </Ui.Box>

            <Ui.Button
              colorScheme="yellow"
              size="lg"
              px="10"
              marginLeft="5"
              display={{ base: 'none', md: 'flex' }}
              onClick={() =>
                window.open('https://wa.me/+5562993395065', '_blank')
              }
            >
              Fale Conosco
            </Ui.Button>

            <Ui.IconButton
              background="transparent"
              size="lg"
              display={{ base: 'block', md: 'none' }}
              aria-label="Open Cart"
              icon={<Ui.Icon w="24px" h="24px" as={IoLogoWhatsapp} />}
              onClick={() =>
                window.open('https://wa.me/+5562993395065', '_blank')
              }
            />

            <Ui.IconButton
              background="transparent"
              size="lg"
              display={{ base: 'block', md: 'none' }}
              aria-label="Open Menu"
              icon={<Ui.Icon w="24px" h="24px" as={CgMenuRight} />}
            />
          </Ui.Flex>
        </Ui.Flex>
      </Ui.Box>
    </>
  )
}
