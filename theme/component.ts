// theme/components.ts
import { createBox, createText } from '@shopify/restyle';
import { TouchableOpacity } from 'react-native';
import type { AppTheme } from './types';

export const Box = createBox<AppTheme>();
export const Text = createText<AppTheme>();


// Themed TouchableOpacity
export const TouchableBox = createBox<AppTheme, typeof TouchableOpacity>(TouchableOpacity);
// Example: a variant-powered button
//export const ButtonBase = createVariant<AppTheme, 'buttonVariants'>();