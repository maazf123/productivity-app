import { View, Text, StyleSheet } from 'react-native';

export default function PlusScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>+ Add New</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffd48a',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
});