import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ScreenBackground from './components/ScreenBackground';

export default function SessionSummaryScreen({ route, navigation }: any) {
  const { subject, roomId, totalPresent } = route.params;

  return (
    <ScreenBackground>
      <View style={styles.card}>
        <Text style={styles.checkmark}>✓</Text>
        <Text style={styles.title}>Session Ended</Text>
        <Text style={styles.subtitle}>{subject} — {roomId}</Text>
        <Text style={styles.count}>{totalPresent} student{totalPresent === 1 ? '' : 's'} marked present</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('RoleSelection')}
        >
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  checkmark: { fontSize: 56, color: '#22c55e', marginBottom: 12 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 4, textAlign: 'center' },
  subtitle: { fontSize: 15, color: '#666', marginBottom: 8 },
  count: { fontSize: 16, fontWeight: '600', color: '#333', marginBottom: 28 },
  button: { backgroundColor: '#4f46e5', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 15, fontWeight: '600' },
  card: {
    marginHorizontal: 24,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
  },
});