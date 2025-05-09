import React from 'react';
import { ChakraProvider, Box, Heading, Text, VStack, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import { ArrowRight, Plus, X } from 'lucide-react';
import theme from './theme';
import { Button, ChevronButton } from './components';

function App() {
  const columns = useBreakpointValue({
    base: 1,
    md: 2,
    lg: 4,
  }) ?? 1; // Provide a default value of 1 if the breakpoint value is undefined

  return (
    <ChakraProvider theme={theme}>
      <Box p={8} maxWidth="1200px" mx="auto">
        <VStack spacing={10} align="stretch">
          <Box>
            <Heading as="h1" size="2xl" mb={2}>Button Component Library</Heading>
            <Text fontSize="lg" color="gray.600">A showcase of our button components with various styles and states</Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={6}>Primary Buttons</Heading>
            <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={6}>
              <GridItem>
                <VStack spacing={4} align="flex-start">
                  <Text fontWeight="semibold">Orange</Text>
                  <Button variant="primary">Label</Button>
                  <Button variant="primary" leftIcon={<Plus size={18} />}>Label</Button>
                  <Button variant="primary" rightIcon={<ArrowRight size={18} />}>Label</Button>
                  <ChevronButton variant="chevron-orange" />
                </VStack>
              </GridItem>
              <GridItem>
                <VStack spacing={4} align="flex-start">
                  <Text fontWeight="semibold">Teal</Text>
                  <Button variant="primary-teal">Label</Button>
                  <Button variant="primary-teal" leftIcon={<Plus size={18} />}>Label</Button>
                  <Button variant="primary-teal" rightIcon={<ArrowRight size={18} />}>Label</Button>
                  <ChevronButton variant="chevron-teal" />
                </VStack>
              </GridItem>
              <GridItem>
                <VStack spacing={4} align="flex-start">
                  <Text fontWeight="semibold">Charcoal Grey</Text>
                  <Button variant="primary-charcoal">Label</Button>
                  <Button variant="primary-charcoal" leftIcon={<Plus size={18} />}>Label</Button>
                  <Button variant="primary-charcoal" rightIcon={<ArrowRight size={18} />}>Label</Button>
                  <ChevronButton variant="chevron-charcoal" />
                </VStack>
              </GridItem>
              <GridItem>
                <VStack spacing={4} align="flex-start">
                  <Text fontWeight="semibold">White</Text>
                  <Button variant="primary-white">Label</Button>
                  <Button variant="primary-white" leftIcon={<Plus size={18} />}>Label</Button>
                  <Button variant="primary-white" rightIcon={<ArrowRight size={18} />}>Label</Button>
                  <ChevronButton variant="chevron-white" />
                </VStack>
              </GridItem>
            </Grid>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={6}>Secondary Buttons</Heading>
            <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={6}>
              <GridItem>
                <VStack spacing={4} align="flex-start">
                  <Text fontWeight="semibold">Orange</Text>
                  <Button variant="secondary">Label</Button>
                  <Button variant="secondary" leftIcon={<Plus size={18} />}>Label</Button>
                  <Button variant="secondary" rightIcon={<ArrowRight size={18} />}>Label</Button>
                </VStack>
              </GridItem>
              <GridItem>
                <VStack spacing={4} align="flex-start">
                  <Text fontWeight="semibold">Teal</Text>
                  <Button variant="secondary-teal">Label</Button>
                  <Button variant="secondary-teal" leftIcon={<Plus size={18} />}>Label</Button>
                  <Button variant="secondary-teal" rightIcon={<ArrowRight size={18} />}>Label</Button>
                </VStack>
              </GridItem>
              <GridItem>
                <VStack spacing={4} align="flex-start">
                  <Text fontWeight="semibold">Charcoal Grey</Text>
                  <Button variant="secondary-charcoal">Label</Button>
                  <Button variant="secondary-charcoal" leftIcon={<Plus size={18} />}>Label</Button>
                  <Button variant="secondary-charcoal" rightIcon={<ArrowRight size={18} />}>Label</Button>
                </VStack>
              </GridItem>
              <GridItem>
                <VStack spacing={4} align="flex-start">
                  <Text fontWeight="semibold">White</Text>
                  <Box p={4} bg="charcoal.900" borderRadius="md">
                    <VStack spacing={4} align="flex-start">
                      <Button variant="secondary-white">Label</Button>
                      <Button variant="secondary-white" leftIcon={<Plus size={18} />}>Label</Button>
                      <Button variant="secondary-white" rightIcon={<ArrowRight size={18} />}>Label</Button>
                    </VStack>
                  </Box>
                </VStack>
              </GridItem>
            </Grid>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={6}>Tertiary Buttons</Heading>
            <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={6}>
              <GridItem>
                <VStack spacing={4} align="flex-start">
                  <Text fontWeight="semibold">Orange</Text>
                  <Button variant="tertiary">Label</Button>
                  <Button variant="tertiary" leftIcon={<Plus size={18} />}>Label</Button>
                  <Button variant="tertiary" rightIcon={<ArrowRight size={18} />}>Label</Button>
                </VStack>
              </GridItem>
              <GridItem>
                <VStack spacing={4} align="flex-start">
                  <Text fontWeight="semibold">Teal</Text>
                  <Button variant="tertiary-teal">Label</Button>
                  <Button variant="tertiary-teal" leftIcon={<Plus size={18} />}>Label</Button>
                  <Button variant="tertiary-teal" rightIcon={<ArrowRight size={18} />}>Label</Button>
                </VStack>
              </GridItem>
              <GridItem>
                <VStack spacing={4} align="flex-start">
                  <Text fontWeight="semibold">Charcoal Grey</Text>
                  <Button variant="tertiary-charcoal">Label</Button>
                  <Button variant="tertiary-charcoal" leftIcon={<Plus size={18} />}>Label</Button>
                  <Button variant="tertiary-charcoal" rightIcon={<ArrowRight size={18} />}>Label</Button>
                </VStack>
              </GridItem>
              <GridItem>
                <VStack spacing={4} align="flex-start">
                  <Text fontWeight="semibold">White</Text>
                  <Box p={4} bg="charcoal.900" borderRadius="md">
                    <VStack spacing={4} align="flex-start">
                      <Button variant="tertiary-white">Label</Button>
                      <Button variant="tertiary-white" leftIcon={<Plus size={18} />}>Label</Button>
                      <Button variant="tertiary-white" rightIcon={<ArrowRight size={18} />}>Label</Button>
                    </VStack>
                  </Box>
                </VStack>
              </GridItem>
            </Grid>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={6}>Tertiary Hover State</Heading>
            <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={6}>
              <GridItem>
                <VStack spacing={4} align="flex-start">
                  <Text fontWeight="semibold">Orange</Text>
                  <Button variant="tertiary-hover-orange">Label</Button>
                  <Button variant="tertiary-hover-orange" leftIcon={<Plus size={18} />}>Label</Button>
                  <Button variant="tertiary-hover-orange" rightIcon={<ArrowRight size={18} />}>Label</Button>
                </VStack>
              </GridItem>
              <GridItem>
                <VStack spacing={4} align="flex-start">
                  <Text fontWeight="semibold">Teal</Text>
                  <Button variant="tertiary-hover-teal">Label</Button>
                  <Button variant="tertiary-hover-teal" leftIcon={<Plus size={18} />}>Label</Button>
                  <Button variant="tertiary-hover-teal" rightIcon={<ArrowRight size={18} />}>Label</Button>
                </VStack>
              </GridItem>
              <GridItem>
                <VStack spacing={4} align="flex-start">
                  <Text fontWeight="semibold">Charcoal Grey</Text>
                  <Button variant="tertiary-hover-charcoal">Label</Button>
                  <Button variant="tertiary-hover-charcoal" leftIcon={<Plus size={18} />}>Label</Button>
                  <Button variant="tertiary-hover-charcoal" rightIcon={<ArrowRight size={18} />}>Label</Button>
                </VStack>
              </GridItem>
              <GridItem>
                <VStack spacing={4} align="flex-start">
                  <Text fontWeight="semibold">White</Text>
                  <Box p={4} bg="charcoal.900" borderRadius="md">
                    <VStack spacing={4} align="flex-start">
                      <Button variant="tertiary-hover-white">Label</Button>
                      <Button variant="tertiary-hover-white" leftIcon={<Plus size={18} />}>Label</Button>
                      <Button variant="tertiary-hover-white" rightIcon={<X size={18} />}>Label</Button>
                    </VStack>
                  </Box>
                </VStack>
              </GridItem>
            </Grid>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={6}>Button Sizes</Heading>
            <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={6}>
              <GridItem>
                <VStack spacing={4} align="flex-start">
                  <Text fontWeight="semibold">Large</Text>
                  <Button size="lg" variant="primary">Label</Button>
                  <Button size="lg" variant="secondary">Label</Button>
                  <Button size="lg" variant="tertiary">Label</Button>
                  <ChevronButton size="lg" />
                </VStack>
              </GridItem>
              <GridItem>
                <VStack spacing={4} align="flex-start">
                  <Text fontWeight="semibold">Medium (Default)</Text>
                  <Button variant="primary">Label</Button>
                  <Button variant="secondary">Label</Button>
                  <Button variant="tertiary">Label</Button>
                  <ChevronButton />
                </VStack>
              </GridItem>
              <GridItem>
                <VStack spacing={4} align="flex-start">
                  <Text fontWeight="semibold">Small</Text>
                  <Button size="sm" variant="primary">Label</Button>
                  <Button size="sm" variant="secondary">Label</Button>
                  <Button size="sm" variant="tertiary">Label</Button>
                  <ChevronButton size="sm" />
                </VStack>
              </GridItem>
            </Grid>
          </Box>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;