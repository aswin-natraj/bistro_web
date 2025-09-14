import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  VStack,
  HStack,
  IconButton,
  useColorModeValue,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  InputGroup,
  InputRightElement,
  Divider,
  Badge,
  Image,
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FiEye, FiEyeOff, FiMail, FiLock, FiArrowRight, FiShield, FiZap } from 'react-icons/fi'

const MotionBox = motion(Box)
const MotionCard = motion(Card.Root)
const MotionButton = motion(Button)

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  const bgGradient = useColorModeValue(
    'linear(to-br, gray.50, brand.50, gray.100)',
    'linear(to-br, gray.900, brand.900, gray.800)'
  )

  const cardBg = useColorModeValue('white', 'gray.800')
  const glassEffect = useColorModeValue(
    'rgba(255, 255, 255, 0.8)',
    'rgba(31, 41, 55, 0.8)'
  )

  const handleLogin = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <Box
      minH="100vh"
      bgGradient={bgGradient}
      position="relative"
      overflow="hidden"
    >
      {/* Animated Background Elements */}
      <MotionBox
        position="absolute"
        top="10%"
        left="10%"
        w="100px"
        h="100px"
        borderRadius="full"
        bg="brand.200"
        opacity={0.3}
        variants={floatingVariants}
        animate="animate"
        filter="blur(40px)"
      />
      <MotionBox
        position="absolute"
        top="60%"
        right="15%"
        w="150px"
        h="150px"
        borderRadius="full"
        bg="brand.300"
        opacity={0.2}
        variants={floatingVariants}
        animate="animate"
        filter="blur(60px)"
        style={{ animationDelay: '2s' }}
      />
      <MotionBox
        position="absolute"
        bottom="20%"
        left="20%"
        w="80px"
        h="80px"
        borderRadius="full"
        bg="brand.400"
        opacity={0.4}
        variants={floatingVariants}
        animate="animate"
        filter="blur(30px)"
        style={{ animationDelay: '4s' }}
      />

      <Container maxW="md" centerContent py={8}>
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          w="full"
        >
          {/* Logo Section */}
          <MotionBox variants={itemVariants} textAlign="center" mb={8}>
            <VStack gap={4}>
              <Box
                w="80px"
                h="80px"
                bg="brand.500"
                borderRadius="2xl"
                display="flex"
                alignItems="center"
                justifyContent="center"
                position="relative"
                _before={{
                  content: '""',
                  position: 'absolute',
                  inset: '-2px',
                  borderRadius: '2xl',
                  background: 'linear-gradient(45deg, brand.400, brand.600)',
                  zIndex: -1,
                }}
              >
                <FiZap size="32" color="white" />
              </Box>
              <VStack gap={1}>
                <Heading
                  size="2xl"
                  bgGradient="linear(to-r, brand.500, brand.700)"
                  bgClip="text"
                  fontWeight="black"
                >
                  Bistro Cloud
                </Heading>
                <Text color="gray.500" fontSize="sm" fontWeight="medium">
                  Restaurant Management System
                </Text>
                <Badge colorScheme="brand" variant="subtle" fontSize="xs">
                  Premium Edition
                </Badge>
              </VStack>
            </VStack>
          </MotionBox>

          {/* Main Card */}
          <MotionCard
            variants={itemVariants}
            bg={glassEffect}
            backdropFilter="blur(20px)"
            border="1px solid"
            borderColor="whiteAlpha.200"
            shadow="xl"
            borderRadius="3xl"
            overflow="hidden"
            position="relative"
          >
            <Card.Body p={8}>
              {/* Welcome Section */}
              <VStack gap={6} mb={8}>
                <VStack gap={2} textAlign="center">
                  <Heading size="lg" color="gray.700">
                    Welcome back! 👋
                  </Heading>
                  <Text color="gray.500" fontSize="sm">
                    Sign in to your account or create a new one
                  </Text>
                </VStack>

                {/* Stats */}
                <HStack gap={6} justify="center">
                  <VStack gap={1}>
                    <HStack>
                      <FiShield color="#8B5CF6" size="16" />
                      <Text fontSize="xs" color="gray.500">Secure</Text>
                    </HStack>
                  </VStack>
                  <Divider orientation="vertical" h="20px" />
                  <VStack gap={1}>
                    <HStack>
                      <FiZap color="#8B5CF6" size="16" />
                      <Text fontSize="xs" color="gray.500">Fast</Text>
                    </HStack>
                  </VStack>
                  <Divider orientation="vertical" h="20px" />
                  <VStack gap={1}>
                    <HStack>
                      <FiLock color="#8B5CF6" size="16" />
                      <Text fontSize="xs" color="gray.500">Private</Text>
                    </HStack>
                  </VStack>
                </HStack>
              </VStack>

              {/* Tabs */}
              <Tabs
                index={activeTab}
                onChange={setActiveTab}
                variant="soft-rounded"
                colorScheme="brand"
              >
                <TabList
                  bg="gray.100"
                  borderRadius="xl"
                  p={1}
                  mb={6}
                  display="grid"
                  gridTemplateColumns="1fr 1fr"
                >
                  <Tab
                    borderRadius="lg"
                    fontWeight="semibold"
                    fontSize="sm"
                    _selected={{
                      bg: 'white',
                      color: 'brand.600',
                      shadow: 'sm'
                    }}
                  >
                    Login
                  </Tab>
                  <Tab
                    borderRadius="lg"
                    fontWeight="semibold"
                    fontSize="sm"
                    _selected={{
                      bg: 'white',
                      color: 'brand.600',
                      shadow: 'sm'
                    }}
                  >
                    Reset Password
                  </Tab>
                </TabList>

                <TabPanels>
                  {/* Login Panel */}
                  <TabPanel p={0}>
                    <AnimatePresence mode="wait">
                      <MotionBox
                        key="login"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <VStack gap={4}>
                          {/* Email Input */}
                          <Box w="full">
                            <Text fontSize="sm" fontWeight="medium" color="gray.700" mb={2}>
                              Email Address
                            </Text>
                            <InputGroup>
                              <Input
                                type="email"
                                placeholder="bistrimenadmin@yopmail.com"
                                defaultValue="bistrimenadmin@yopmail.com"
                                bg="white"
                                border="2px solid"
                                borderColor="gray.200"
                                borderRadius="xl"
                                h="50px"
                                fontSize="sm"
                                _hover={{ borderColor: 'brand.300' }}
                                _focus={{
                                  borderColor: 'brand.500',
                                  boxShadow: '0 0 0 3px rgba(139, 92, 246, 0.1)'
                                }}
                              />
                              <InputRightElement h="50px">
                                <FiMail color="#9CA3AF" size="18" />
                              </InputRightElement>
                            </InputGroup>
                          </Box>

                          {/* Password Input */}
                          <Box w="full">
                            <Text fontSize="sm" fontWeight="medium" color="gray.700" mb={2}>
                              Password
                            </Text>
                            <InputGroup>
                              <Input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="••••••••"
                                defaultValue="password123"
                                bg="white"
                                border="2px solid"
                                borderColor="gray.200"
                                borderRadius="xl"
                                h="50px"
                                fontSize="sm"
                                _hover={{ borderColor: 'brand.300' }}
                                _focus={{
                                  borderColor: 'brand.500',
                                  boxShadow: '0 0 0 3px rgba(139, 92, 246, 0.1)'
                                }}
                              />
                              <InputRightElement h="50px">
                                <IconButton
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => setShowPassword(!showPassword)}
                                  icon={showPassword ? <FiEyeOff /> : <FiEye />}
                                  color="gray.400"
                                />
                              </InputRightElement>
                            </InputGroup>
                          </Box>

                          {/* Login Button */}
                          <MotionButton
                            w="full"
                            h="50px"
                            bg="brand.500"
                            color="white"
                            borderRadius="xl"
                            fontSize="sm"
                            fontWeight="semibold"
                            rightIcon={<FiArrowRight />}
                            isLoading={isLoading}
                            loadingText="Signing in..."
                            onClick={handleLogin}
                            _hover={{
                              bg: 'brand.600',
                              transform: 'translateY(-1px)',
                              shadow: 'lg'
                            }}
                            _active={{ transform: 'translateY(0)' }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            mt={2}
                          >
                            Sign In
                          </MotionButton>

                          {/* Resend Link */}
                          <Link
                            color="brand.500"
                            fontSize="sm"
                            fontWeight="medium"
                            _hover={{ color: 'brand.600', textDecoration: 'none' }}
                          >
                            Resend verification email
                          </Link>
                        </VStack>
                      </MotionBox>
                    </AnimatePresence>
                  </TabPanel>

                  {/* Reset Panel */}
                  <TabPanel p={0}>
                    <AnimatePresence mode="wait">
                      <MotionBox
                        key="reset"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <VStack gap={4}>
                          {/* Email Input */}
                          <Box w="full">
                            <Text fontSize="sm" fontWeight="medium" color="gray.700" mb={2}>
                              Email Address
                            </Text>
                            <InputGroup>
                              <Input
                                type="email"
                                placeholder="email@example.com"
                                bg="white"
                                border="2px solid"
                                borderColor="gray.200"
                                borderRadius="xl"
                                h="50px"
                                fontSize="sm"
                                _hover={{ borderColor: 'brand.300' }}
                                _focus={{
                                  borderColor: 'brand.500',
                                  boxShadow: '0 0 0 3px rgba(139, 92, 246, 0.1)'
                                }}
                              />
                              <InputRightElement h="50px">
                                <FiMail color="#9CA3AF" size="18" />
                              </InputRightElement>
                            </InputGroup>
                          </Box>

                          {/* Reset Button */}
                          <MotionButton
                            w="full"
                            h="50px"
                            bg="brand.500"
                            color="white"
                            borderRadius="xl"
                            fontSize="sm"
                            fontWeight="semibold"
                            rightIcon={<FiArrowRight />}
                            _hover={{
                              bg: 'brand.600',
                              transform: 'translateY(-1px)',
                              shadow: 'lg'
                            }}
                            _active={{ transform: 'translateY(0)' }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            mt={2}
                          >
                            Send Reset Link
                          </MotionButton>

                          {/* Info Message */}
                          <HStack
                            bg="brand.50"
                            p={3}
                            borderRadius="lg"
                            border="1px solid"
                            borderColor="brand.200"
                            w="full"
                          >
                            <FiMail color="#8B5CF6" size="16" />
                            <Text fontSize="xs" color="brand.700">
                              We'll email you a link to reset your password
                            </Text>
                          </HStack>
                        </VStack>
                      </MotionBox>
                    </AnimatePresence>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Card.Body>
          </MotionCard>

          {/* Support Section */}
          <MotionBox variants={itemVariants} textAlign="center" mt={8}>
            <Text color="gray.500" fontSize="sm">
              Need help? Contact{' '}
              <Link
                href="mailto:support@bistrocloud.com"
                color="brand.500"
                fontWeight="medium"
                _hover={{ color: 'brand.600', textDecoration: 'none' }}
              >
                support@bistrocloud.com
              </Link>
            </Text>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default Login