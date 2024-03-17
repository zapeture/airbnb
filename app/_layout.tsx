import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';


export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "mono": require("../assets/fonts/Montserrat-Regular.ttf"),
    "mono-sb": require("../assets/fonts/Montserrat-SemiBold.ttf"),
    "mono-b": require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const router = useRouter()
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(modals)/login" options={{
        title: "Login or Signup",
        presentation: "modal",
        headerTitleStyle: {
          fontFamily: "mono-sb"
        },
        headerLeft: () => <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close-outline" size={28} />
        </TouchableOpacity>
      }} />

      <Stack.Screen name="listing/[id]" options={{
        headerTitle: ""
      }}></Stack.Screen>
      <Stack.Screen name="(modals)/booking" options={{
        presentation: "transparentModal",
        animation: "fade",
        headerLeft: () => <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close-outline" size={28} />
        </TouchableOpacity>
      }}></Stack.Screen>
    </Stack>
  );
}
