import * as Haptics from 'expo-haptics';
import { useCallback } from 'react';

/**
 * Custom hook for triggering haptic feedback in a React Native app.
 */
export const useHaptics = () => {
  /**
   * Triggers light haptic feedback.
   */
  const triggerLight = useCallback(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  }, []);

  /**
   * Triggers medium haptic feedback.
   */
  const triggerMedium = useCallback(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).then((res)=>{
      console.log(res, 'resp')
    }).then((error)=>{
      console.log(error, 'error')
    });
  }, []);

  /**
   * Triggers heavy haptic feedback.
   */
  const triggerHeavy = useCallback(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  }, []);

  /**
   * Triggers notification haptic feedback.
   * @param type - The type of notification feedback (success, warning, error).
   */
  const triggerNotification = useCallback((type: Haptics.NotificationFeedbackType) => {
    Haptics.notificationAsync(type);
  }, []);

  return {
    triggerLight,
    triggerMedium,
    triggerHeavy,
    triggerNotification,
  };
};
