import { useAuthStore } from '@/services/stores/auth.store';
import { useRootNavigationState, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function Index() {
  const router = useRouter();
  const rootNavigationState = useRootNavigationState();
    const user = useAuthStore((state) => state.user);
  // ✅ This pattern is verified from Stack Overflow and GitHub discussions
  const navigatorReady = rootNavigationState?.key != null;

  console.log(navigatorReady, 'navigatorReady');
  useEffect(() => {
    // Wait for navigator to be ready
    if (!navigatorReady) return;

   // checkAndRedirect();
  }, [navigatorReady]);

  async function checkAndRedirect() {
    try {
    
      if (true ) {
        router.replace('/(app)/(home)/dashboard');
      } else {
       // router.replace('/(tabs)');
      }
    } catch (error) {
      console.error('Error checking onboarding:', error);
      // Fallback to tabs on error
      //router.replace('/(tabs)');
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <ActivityIndicator size="large" />
    </View>
  );
}