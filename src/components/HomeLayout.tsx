import { Flex } from '@chakra-ui/react'
import { Outlet } from '@tanstack/react-router'
// import { Footer } from './common/Footer'
// import { Topbar } from './common/Topbar'

export const HomeLayout = () => {
  return (
    <Flex h="100vh" flexDir="column" justify="space-between">
      {/* <Topbar /> */}
      <Outlet />
      {/* <Footer /> */}
    </Flex>
  )
}
