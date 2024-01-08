import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TitleComponent from '../../Components/TitleComponent';
import QuickStartComponent from '../../Components/WorkoutScreen/QuickStart';
import MyTemplatesComponent from '../../Components/WorkoutScreen/MyTemplatesComponent';
import ExampleTemplatesComponent from '../../Components/WorkoutScreen/ExampleTemplatesComponent';




export default function StartWorkoutScreen() {

  const handleQuickStart = () => {
    // Handle the quick start action here
  };

  return (
    <View style={styles.container}>
      <TitleComponent title="Start Workout" />

      <QuickStartComponent onStart={handleQuickStart} />
      <MyTemplatesComponent/>
      <ExampleTemplatesComponent/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    color: '#333',
  },
});
