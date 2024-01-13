import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TitleComponent from '../../Components/TitleComponent';
import QuickStart from '../../Components/Workout/QuickStart';
import MyTemplatesComponent from '../../Components/Workout/MyTemplatesComponent';
import ExampleTemplatesComponent from '../../Components/Workout/ExampleTemplatesComponent';
import HeadingComponent from '../../Components/HeadingComponent';




export default function StartWorkoutScreen() {

  const handleQuickStart = () => {
    // Handle the quick start action here
  };

  return (
    <View style={styles.container}>
      <TitleComponent title="Start Workout" />

      <QuickStart onStart={handleQuickStart} />
      <HeadingComponent title="Templates" />
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
