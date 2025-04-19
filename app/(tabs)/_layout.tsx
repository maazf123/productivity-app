import React, { useRef } from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { Animated, Pressable, StyleSheet, Text } from 'react-native';
import { Link } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#2a3f73',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: '#ffffff',
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
          tabBarButton: () => <AnimatedPlusButton />,
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

function AnimatedPlusButton() {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 1.15,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 4,
      tension: 150,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Link href="/plus" asChild>
      <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
        <Animated.View style={[styles.plusButton, { transform: [{ scale }] }]}>
          <Text style={styles.plusText}>+</Text>
        </Animated.View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  plusButton: {
    position: 'absolute',
    top: -30,
    alignSelf: 'center',
    backgroundColor: '#a9c9ff', // soft blue tone
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
    color: '#000000',
  },
});
