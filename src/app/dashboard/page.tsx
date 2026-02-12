'use client';

import { Box, Heading, Text } from '@chakra-ui/react';

export default function DashboardHome() {
  return (
    <Box>
      <Heading mb={4}>Dashboard Home</Heading>
      <Text>
        Welcome to Sales.Co Website👋
        <br />
        <br />
        Use the sidebar to navigate between Users and Products.
      </Text>
    </Box>
  );
}

