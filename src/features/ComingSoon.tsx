import { Box, Heading, Text } from '@chakra-ui/react';

const ComingSoon = () => (
  <Box
    minH='calc(100vh - 420px)'
    display='flex'
    flexDirection='column'
    alignItems='center'
    justifyContent='center'
  >
    <Heading size='2xl' mb={4}>
      Coming Soon
    </Heading>
    <Text fontSize='xl' color='gray.600'>
      This page is under construction and will be available soon!
    </Text>
  </Box>
);

export default ComingSoon;
