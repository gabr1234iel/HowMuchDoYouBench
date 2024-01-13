import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TitleComponent from '../../Components/TitleComponent';
import firebaseApi from '../../api/firebaseApi';

export default function ProfileScreen() {

  firebaseApi.readData();

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
