'use client'

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
} from '@chakra-ui/react'
import { AuthProvider } from '@/context/AuthContext'

const system = createSystem(defaultConfig)

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <AuthProvider>{children}</AuthProvider>
    </ChakraProvider>
  )
}