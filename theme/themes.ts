import { createTheme } from '@shopify/restyle';

const baseSpacing = {
  none: 0,
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 40,
};

const baseBorderRadii = {
  s: 4,
  m: 10,
  l: 25,
  xl: 50,
};

export const lightTheme = createTheme({
  colors: {
    background: '#E0E0E0',
    backgroundSecondary: '#B0B0B0',
    card: '#F0F0F0',
    primary: '#3B82F6',
    text: '#202020',
    textSecondary: '#6B7280',
    textMuted: '#9CA3AF',
    error: '#EF4444',
    border: '#E5E7EB',
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
    
  },
  fontFamilies: {
    regular: 'Manrope_400Regular',
    medium: 'Manrope_500Medium',
    semiBold: 'Manrope_600SemiBold',
    bold: 'Manrope_700Bold',
  },
  spacing: baseSpacing,
  borderRadii: baseBorderRadii,
  textVariants: {
    defaults: {
      fontSize: 16,
      color: 'text',
    },
    heading: {
      fontSize: 24,
      fontFamily: 'Manrope_700Bold',
      color: 'text',
    },
    subheading: {
      fontSize: 18,
      fontFamily: 'Manrope_600SemiBold',
      color: 'textSecondary',
    },
    caption: {
      fontSize: 12,
      color: 'textMuted',
    },
    button: {
      fontSize: 14,
      fontWeight: '600',
      color: 'white',
    },
    error: {
      fontSize: 14,
      color: 'error',
    },
  },
  buttonVariants: {
    primary: {
      backgroundColor: 'primary',
      borderRadius: 'm',
      padding: 'm',
      
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: 'primary',
      borderRadius: 'm',
      padding: 'm',
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export const darkTheme = createTheme({
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: '#101010',
    backgroundSecondary: 'white',
    card: '#1E1E1E',
    primary: '#3B82F6',
    text: '#E0E0E0',
    textSecondary: '#D1D5DB',
    textMuted: '#6B7280',
    error: '#F87171',
    border: '#374151',
    transparent: 'transparent'
  },
});