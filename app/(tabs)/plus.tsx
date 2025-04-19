import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { useTheme } from '@react-navigation/native';

export default function TabLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
        tabBarStyle: {
          backgroundColor: colors.card,
          borderTopColor: '#e0e0e0',
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="plus"
        options={{
          title: '',
          tabBarButton: () => (
            <Link href="/plus" asChild>
              <Pressable style={[styles.plusButton, { backgroundColor: colors.primary }]}>
                <Text style={styles.plusText}>+</Text>
              </Pressable>
            </Link>
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="cog" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  plusButton: {
    position: 'absolute',
    top: -30,
    alignSelf: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  plusText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
});