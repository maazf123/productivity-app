import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function DashboardScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.navButton} onPress={() => router.push('/schedule')}>
            <Text style={styles.navButtonText}>Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => router.push('/goals')}>
            <Text style={styles.navButtonText}>Goals</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.navButton} onPress={() => router.push('/habit-tracker')}>
            <Text style={styles.navButtonText}>Habit Tracker</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => router.push('/journal')}>
            <Text style={styles.navButtonText}>Journal</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Goals</Text>
          <Text style={styles.cardItem}>• Finish this dashboard layout</Text>
          <Text style={styles.cardItem}>• Stick to study schedule</Text>
          <Text style={styles.cardItem}>• Sleep by 11:30 PM</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Upcoming Schedule</Text>
          <Text style={styles.cardItem}>12:00 – Dars</Text>
          <Text style={styles.cardItem}>2:00 – Homework session</Text>
          <Text style={styles.cardItem}>5:00 – Class</Text>
          <Text style={styles.cardItem}>8:00 – Meal prep</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6fb',
  },
  scroll: {
    padding: 20,
    paddingBottom: 140, // for space below tab bar
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  navButton: {
    flex: 1,
    backgroundColor: '#e3edff',
    paddingVertical: 16,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  navButtonText: {
    color: '#1f2a40',
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2a40',
    marginBottom: 8,
  },
  cardItem: {
    fontSize: 14,
    color: '#4e91f9',
    marginBottom: 4,
  },
});