import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  globalCss: {
    'html, body': {
      margin: 0,
      padding: 0,
      fontSize: 'md',
      color: 'gray.700',
      fontWeight: '400',
      backgroundColor: '#F9FAFB', // light neutral background
    },
  },
  theme: {
    breakpoints: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    tokens: {
      colors: {
        black: { value: '#000000' },
        white: { value: '#ffffff' },
        gray: {
          50: { value: '#F9FAFB' },
          100: { value: '#F3F4F6' },
          200: { value: '#E5E7EB' },
          300: { value: '#D1D5DB' },
          400: { value: '#9CA3AF' },
          500: { value: '#6B7280' },
          600: { value: '#4B5563' },
          700: { value: '#374151' },
          800: { value: '#1F2937' },
          900: { value: '#111827' },
        },
        brand: {
          50: { value: '#F5F3FF' },
          100: { value: '#EDE9FE' },
          200: { value: '#DDD6FE' },
          300: { value: '#C4B5FD' },
          400: { value: '#A78BFA' },
          500: { value: '#8B5CF6' }, // main purple tone
          600: { value: '#7C3AED' },
          700: { value: '#6D28D9' },
          800: { value: '#5B21B6' },
          900: { value: '#4C1D95' },
        },
        accent: {
          success: { value: '#10B981' },
          warning: { value: '#F59E0B' },
          danger: { value: '#EF4444' },
        },
      },
      fonts: {
        heading: { value: `'Poppins', sans-serif` },
        body: { value: `'Poppins', sans-serif` },
      },
      fontWeights: {
        thin: { value: '100' },
        extralight: { value: '200' },
        light: { value: '300' },
        normal: { value: '400' },
        medium: { value: '500' },
        semibold: { value: '600' },
        bold: { value: '700' },
        extrabold: { value: '800' },
        black: { value: '900' },
      },
      fontSizes: {
        xs: { value: '0.75rem' }, // 12px
        sm: { value: '0.875rem' }, // 14px
        md: { value: '1rem' }, // 16px
        lg: { value: '1.125rem' }, // 18px
        xl: { value: '1.25rem' }, // 20px
        '2xl': { value: '1.5rem' }, // 24px
        '3xl': { value: '1.875rem' }, // 30px
        '4xl': { value: '2.25rem' }, // 36px
        '5xl': { value: '3rem' }, // 48px
        '6xl': { value: '3.75rem' }, // 60px
      },
      radii: {
        none: { value: '0' },
        sm: { value: '0.125rem' },
        md: { value: '0.375rem' },
        lg: { value: '0.5rem' },
        xl: { value: '0.75rem' },
        '2xl': { value: '1rem' },
        '3xl': { value: '1.5rem' },
        full: { value: '9999px' },
      },
      shadows: {
        xs: { value: '0 1px 2px rgba(0, 0, 0, 0.05)' },
        sm: { value: '0 1px 3px rgba(0, 0, 0, 0.1)' },
        md: { value: '0 4px 6px rgba(0, 0, 0, 0.1)' },
        lg: { value: '0 10px 15px rgba(0, 0, 0, 0.1)' },
        xl: { value: '0 20px 25px rgba(0, 0, 0, 0.15)' },
      },
    },
  },
})

const BistroCloudTheme = createSystem(defaultConfig, config)

export default BistroCloudTheme
