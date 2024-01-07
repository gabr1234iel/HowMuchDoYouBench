import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useClerk } from '@clerk/clerk-expo';
import TitleComponent from '../../Components/TitleComponent'; // Ensure this path is correct

export default function SettingsScreen() {
  const { signOut } = useClerk();

  const handleLogout = async () => {
    try {
      await signOut();
      // Handle successful logout if needed
    } catch (err) {
      console.error('Logout failed:', err);
      // Handle logout error if needed
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TitleComponent title="Settings" />
      {/* Dummy setting button 1 */}
      <TouchableOpacity style={styles.settingButton}>
        <Text style={styles.settingButtonText}>Setting 1</Text>
      </TouchableOpacity>
      {/* Dummy setting button 2 */}
      <TouchableOpacity style={styles.settingButton}>
        <Text style={styles.settingButtonText}>Setting 2</Text>
      </TouchableOpacity>
      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  settingButton: {
    backgroundColor: '#3498db',
    marginLeft: 24,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    alignSelf: 'flex-start', // Align buttons to the start (left)
  },
  settingButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    marginLeft: 24,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-start', // Align buttons to the start (left)
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
