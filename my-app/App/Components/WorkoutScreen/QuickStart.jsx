import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SubheadingComponent from '../SubheadingComponent';




const QuickStartComponent = ({ onStart }) => {
  return (
    <View style={styles.container}>
        <SubheadingComponent text="Quick Start" />
        <TouchableOpacity style={styles.button} onPress={onStart}>
        <Text style={styles.buttonText}>Start an Empty Workout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 24,
    display:'flex',
    flexDirection:'column',
  },
  button: {
    backgroundColor: 'tomato',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%', 
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default QuickStartComponent;
