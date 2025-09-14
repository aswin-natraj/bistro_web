import { Box, Container, Flex } from '@chakra-ui/react'
import type { ReactNode } from 'react'
// import { ImageData } from '../constant/ImageData'

interface StepItem {
  title: string
  description: string
}

interface AuthLayoutProps {
  leftContent: ReactNode
  rightContent: ReactNode
  stepsBar?: StepItem[]
}

const AuthLayout = ({ leftContent, rightContent }: AuthLayoutProps) => {
  return (
    <Flex minH="100vh" direction={{ base: 'column', md: 'row' }}>
      {/* Left Side: Branding Section */}
      <Box
        bg="brand.100"
        color="white"
        width={{ base: '100%', md: '35%' }}
        position="relative"
        display={{ base: 'none', md: 'block' }}
      >
        {leftContent}
      </Box>

      {/* Right Side: Content Section */}
      <Box
        flex="1"
        width={{ base: '100%', md: '65%' }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        py={8}
      >
        <Container
          maxW={{
            base: 'container.sm',
            md: 'container.md',
            lg: 'container.lg',
          }}
          w="full"
          px={6}
        >
          {/* Mobile Logo */}
          <Box
            textAlign="center"
            mb={6}
            display={{ base: 'block', md: 'none' }}
          >
            {/* <Image
              src={ImageData.mobileLogo}
              alt="Mobile Logo"
              mx="auto"
              maxH="60px"
            /> */}
          </Box>

          {rightContent}
        </Container>
      </Box>
    </Flex>
  )
}

export default AuthLayout
