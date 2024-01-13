import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TitleComponent from '../../Components/TitleComponent';

export default function ProfileScreen() {

  return (
    <View style={styles.container}>
      <TitleComponent title="Profile" />
      {/* Rest of your screen content */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    color: '#333',
  },
});
