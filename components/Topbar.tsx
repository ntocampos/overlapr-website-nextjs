import {
  Box,
  Flex,
  Center,
  Spacer,
  Link,
  Heading,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Container,
} from '@chakra-ui/react'
import { CalendarIcon, ChevronDownIcon, TimeIcon } from '@chakra-ui/icons'
import React from 'react'

const Topbar = () => {
  return (
    <Box as="header" h="60px" boxShadow="sm" mb={8}>
      <Container minW="container.xl" h="100%">
        <Flex align="center" h="100%">
          <Center>
            <Heading as="h3" size="lg" color="cyan.600">
              Overlapr
            </Heading>
          </Center>
          <Spacer />
          <Flex justify="space-between" minW="sm">
            <Item>Get started</Item>
            <Item>
              <Menu matchWidth>
                <MenuButton as={Link}>
                  Demos <ChevronDownIcon />
                </MenuButton>
                <MenuList>
                  <MenuItem icon={<CalendarIcon />}>
                    <Link href="#">Calendar</Link>
                  </MenuItem>
                  <MenuItem icon={<TimeIcon />}>
                    <Link href="#">Timeline</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Item>
            <Item>Contribute</Item>
            <Item>GitHub</Item>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

type ItemProps = {
  children: React.ReactNode
  link?: string
}

const Item = ({ children, link = '#' }: ItemProps) => (
  <Center>
    <Link size="xl" href={link} fontWeight="semibold">
      {children}
    </Link>
  </Center>
)

export default Topbar
