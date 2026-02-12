'use client';

import { Box, Heading, Text, Image, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useProducts } from '@/features/products/useProducts';

export default function ProductsPage() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <Box p={6}>
        <Spinner />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={6}>
        <Text color="red.500">خطا در دریافت محصولات</Text>
      </Box>
    );
  }

  return (
    <Box p={6}>
      <Heading mb={4}>Products</Heading>

      <SimpleGrid columns={[1, 2, 3]} gap={6}>
        {products.map((product) => (
          <Box
            key={product.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            _hover={{ shadow: 'md' }}
          >
            <Image
              src={product.thumbnail}
              alt={product.title}
              borderRadius="md"
              mb={3}
            />
            <Heading size="sm" mb={1}>
              {product.title}
            </Heading>
            <Text fontSize="sm" color="gray.600" mb={2}>
              {product.description}
            </Text>
            <Text fontWeight="bold">${product.price}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
