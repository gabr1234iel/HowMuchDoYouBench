import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useClerk } from '@clerk/clerk-expo';
import TitleComponent from '../../Components/TitleComponent'; // Ensure this path is correct
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Ensure this is installed

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
      {/* Profile Setting */}
      <TouchableOpacity style={styles.settingRow} onPress={() => { /* Navigate to Profile Settings */ }}>
        <MaterialIcons name="person" size={24} color="#333" />
        <Text style={styles.settingText}>Profile Settings</Text>
      </TouchableOpacity>
      {/* Privacy Setting */}
      <TouchableOpacity style={styles.settingRow} onPress={() => { /* Navigate to Privacy Settings */ }}>
        <MaterialIcons name="lock" size={24} color="#333" />
        <Text style={styles.settingText}>Privacy Settings</Text>
      </TouchableOpacity>
      {/* Logout */}
      <TouchableOpacity style={styles.settingRow} onPress={handleLogout}>
        <MaterialIcons name="logout" size={24} color="#333" />
        <Text style={styles.settingText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Light grey border for separation
  },
  settingText: {
    fontSize: 16,
    marginLeft: 16, // Space between icon and text
    color: '#333', // Dark text color for readability
  },
});