import { Box, Button, Container, Flex, Grid, Heading, HStack, Icon, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Flex justifyContent="space-between" alignItems="center" p={4} borderBottom="1px" borderColor="gray.200">
        <HStack spacing={8}>
          <Text fontWeight="bold">Health Insights</Text>
          <Text fontWeight="bold">Blog</Text>
          <Text fontWeight="bold">Explore</Text>
          <Text fontWeight="bold">About Us</Text>
        </HStack>
        <HStack spacing={4}>
          <Text>Current Health Trends</Text>
          <Button bg="#8A2BE2" color="white">
            Sign Up
          </Button>
        </HStack>
      </Flex>

      {/* Teaser Area */}
      <VStack spacing={4} py={10} align="center">
        <Heading>Empowering Your Wellness Journey</Heading>
        <Text color="gray.500" maxWidth="container.md" textAlign="center">
          Discover the latest innovations in health and wellness to keep you at your peak performance every day.
        </Text>
        <Box p={6} border="2px" borderColor="gray.200" borderRadius="full" w="120px" h="120px" display="flex" alignItems="center" justifyContent="center">
          <Text fontSize="4xl" color="green.400">
            87
          </Text>
        </Box>
        <Text>Peak Wellness</Text>
      </VStack>

      {/* Feature Section */}
      <Grid templateColumns="repeat(3, 1fr)" gap={6} p={6}>
        <Box p={4} boxShadow="md" borderRadius="lg">
          <HStack spacing={4}>
            <Image src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjB0aXBzfGVufDB8fHx8MTcxNTI4NzM0OHww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" boxSize="100px" />
            <Text>Stay active with daily personalized health tips tailored just for you.</Text>
          </HStack>
        </Box>
        <Box p={4} boxShadow="md" borderRadius="lg">
          <VStack align="start" spacing={2}>
            <Text fontWeight="bold" color="green.400">
              Trending Now
            </Text>
            <Link color="#8A2BE2">Mindfulness for Beginners</Link>
            <Link color="#8A2BE2">Balanced Diet Plans</Link>
            <Link color="#8A2BE2">Yoga for Flexibility</Link>
          </VStack>
        </Box>
        <Box p={4} boxShadow="md" borderRadius="lg">
          <HStack spacing={4}>
            <Image src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBleHBlcnR8ZW58MHx8fHwxNzE1Mjg3MzQ4fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" boxSize="100px" />
            <Text>Insights from wellness experts to guide you on your health journey.</Text>
          </HStack>
        </Box>
      </Grid>

      {/* Footer */}
      <Box borderTop="1px" borderColor="gray.200" p={6}>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <VStack align="start">
            <Text fontWeight="bold" color="gray.500">
              Explore
            </Text>
            <Link>Health Insights</Link>
            <Link>Blog</Link>
          </VStack>
          <VStack align="start">
            <Text fontWeight="bold" color="gray.500">
              Services
            </Text>
            <Link>Subscription Plans</Link>
            <Link>User Ratings</Link>
          </VStack>
          <VStack align="start">
            <Text fontWeight="bold" color="gray.500">
              Support
            </Text>
            <Link>FAQ</Link>
            <Link>Contact Info</Link>
          </VStack>
          <VStack align="start">
            <Text fontWeight="bold" color="gray.500">
              Company
            </Text>
            <Link>Careers</Link>
            <Link>About Us</Link>
          </VStack>
        </Grid>
        <Flex justifyContent="space-between" alignItems="center" pt={4}>
          <Text color="gray.500">© 2023 Health Platform, Inc.</Text>
          <HStack spacing={4}>
            <Icon as={FaFacebook} color="gray.500" />
            <Icon as={FaInstagram} color="gray.500" />
            <Icon as={FaTwitter} color="gray.500" />
            <Icon as={FaYoutube} color="gray.500" />
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
