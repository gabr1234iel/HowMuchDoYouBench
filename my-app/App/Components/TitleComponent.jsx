// TitleComponent.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TitleComponent = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize:  36,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 24,  // Adjust left margin as needed
    marginTop: 52,   // Adjust top margin as needed
    marginBottom: 24,
    textAlign: 'left',
  },
});

export default TitleComponent;
