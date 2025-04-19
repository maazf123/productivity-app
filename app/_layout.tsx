import { DarkTheme, DefaultTheme, ThemeProvider, Theme as NavigationTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import Colors from '@/constants/Colors';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const theme: NavigationTheme = {
    dark: colorScheme === 'dark',
    colors: {
      ...(colorScheme === 'dark' ? DarkTheme.colors : DefaultTheme.colors),
      background: Colors[colorScheme ?? 'light'].background,
      card: Colors[colorScheme ?? 'light'].card,
      text: Colors[colorScheme ?? 'light'].text,
      primary: Colors[colorScheme ?? 'light'].tint,
      border: '#ccc',
      notification: Colors[colorScheme ?? 'light'].tint,
    },
    fonts: {
      regular: { fontFamily: 'System', fontWeight: 'normal' },
      medium: { fontFamily: 'System', fontWeight: '500' },
      bold: { fontFamily: 'System', fontWeight: '700' },
      heavy: { fontFamily: 'System', fontWeight: '900' },
    },
  };

  return (
    <ThemeProvider value={theme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
