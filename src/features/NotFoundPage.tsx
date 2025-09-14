import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react'
import { useNavigate } from '@tanstack/react-router'

const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
      px={4}
    >
      <VStack gap={4} textAlign="center">
        <Heading size="xl" color="gray.700"></Heading>
        <Text color="gray.500" fontSize="lg"></Text>
        <Button onClick={() => navigate({ to: '/app/dashboard' })} shadow="md">
          Back to Home
        </Button>
      </VStack>
    </Box>
  )
}

export default NotFoundPage
