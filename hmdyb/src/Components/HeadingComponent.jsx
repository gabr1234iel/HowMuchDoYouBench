import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HeadingComponent = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize:  28,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 24,  // Adjust left margin as needed
    marginTop: 20,
    textAlign: 'left',
  },
});

export default HeadingComponent;
