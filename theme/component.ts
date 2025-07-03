// theme/components.ts
import { createBox, createText } from '@shopify/restyle';
import { TouchableOpacity } from 'react-native';
import type { AppTheme } from './types';

export const XView = createBox<AppTheme>();
export const YView = createBox<AppTheme>();
export const Text = createText<AppTheme>();

// XView.defaultProps = {
//   flexDirection: 'row',
// };

// YView.defaultProps = {
//   flexDirection: 'column',
// };


// Themed TouchableOpacity
export const TouchableBox = createBox<AppTheme, typeof TouchableOpacity>(TouchableOpacity);
// Example: a variant-powered button
//export const ButtonBase = createVariant<AppTheme, 'buttonVariants'>();