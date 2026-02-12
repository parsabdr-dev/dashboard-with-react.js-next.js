'use client';

import { Box, Heading, Spinner, Text, Flex } from '@chakra-ui/react';
import { useUsers } from '@/features/users/useUsers';
import type { User } from '@/features/users/types';

export default function UsersPage() {
  const { users, loading, error } = useUsers();

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
        <Text color="red.500">خطا در دریافت کاربران</Text>
      </Box>
    );
  }

  return (
    <Box p={6}>
      <Heading mb={4}>Users</Heading>

      {/* Header */}
      <Flex fontWeight="bold" borderBottom="1px solid" borderColor="gray.200" pb={2} mb={2}>
        <Box w="60px">ID</Box>
        <Box flex="1">Name</Box>
        <Box flex="2">Email</Box>
      </Flex>

      {/* Rows */}
      {users.map((user) => (
        <Flex
          key={user.id}
          py={2}
          borderBottom="1px solid"
          borderColor="gray.100"
          _hover={{ bg: 'gray.50' }}
        >
          <Box w="60px">{user.id}</Box>
          <Box flex="1">
            {user.firstName} {user.lastName}
          </Box>
          <Box flex="2">{user.email}</Box>
        </Flex>
      ))}
    </Box>
  );
}
