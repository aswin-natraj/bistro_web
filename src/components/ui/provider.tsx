'use client'

import { ChakraProvider } from '@chakra-ui/react'

import BistroCloudTheme from '@/theme/theme'
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode'
//

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={BistroCloudTheme}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
