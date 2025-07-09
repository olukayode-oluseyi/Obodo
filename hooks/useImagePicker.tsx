import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

/**
 * Custom hook to handle image picking and camera capture using Expo Image Picker.
 * 
 * @returns {{
 *   images: string[],
 *   pickImages: () => Promise<void>,
 *   takePhoto: () => Promise<void>,
 *   clearImages: () => void
 * }}
 */
export function useImagePicker() {
  const [images, setImages] = useState<string[]>([]);

  /**
   * Launches the image library and appends selected image URIs to the state.
   * Requests media library permissions before launching.
   */
  const pickImages = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert('Permission to access media library is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
      allowsMultipleSelection: true,
      selectionLimit: 0, // 0 = unlimited on iOS
    });

    if (!result.canceled) {
      const uris = result.assets.map(asset => asset.uri);
      setImages(prev => [...prev, ...uris]);
    }
  };

  /**
   * Launches the camera and appends the captured image URI to the state.
   * Requests camera permissions before launching.
   */
  const takePhoto = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert('Permission to access the camera is required!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setImages(prev => [...prev, result.assets[0].uri]);
    }
  };

  /**
   * Removes a specific image by URI if provided, otherwise clears all images.
   * 
   * @param {string} [uri] - Optional URI of the image to remove.
   */
  const clearImages = (uri?: string) => {
    if (uri) {
      setImages(prev => prev.filter(img => img !== uri));
    } else {
      setImages([]);
    }
  };

  return {
    images,
    pickImages,
    takePhoto,
    clearImages,
  };
}