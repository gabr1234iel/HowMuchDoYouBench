import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TitleComponent from '../../Components/TitleComponent';


export default function ExercisesScreen() {
  return (
    <View style={styles.container}>
      <TitleComponent title="Exercises" />
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
