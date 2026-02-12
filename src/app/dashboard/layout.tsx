'use client'

import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { Box, Flex, Button, Heading } from '@chakra-ui/react'

export default function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  const { user, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  if (!user) return null

  return (
    <Flex minH="100vh">
      <Box w="250px" bg="gray.800" color="white" p={4}>
        <Heading size="md" mb={6}>
          داشبورد
        </Heading>

        <Button w="full" mb={2} onClick={() => router.push('/dashboard')}>
          خانه
        </Button>

        <Button w="full" mb={2} onClick={() => router.push('/dashboard/users')}>
          کاربران
        </Button>

        <Button w="full" mb={2} onClick={() => router.push('/dashboard/products')}>
          محصولات
        </Button>

        <Button colorScheme="red" w="full" mt={6} onClick={logout}>
          خروج
        </Button>
      </Box>

      <Box flex="1" p={6} bg="gray.50">
        {children}
      </Box>
    </Flex>
  )
}