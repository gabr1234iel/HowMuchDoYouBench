import React from 'react';
import { Text, StyleSheet } from 'react-native';

const SubheadingComponent = ({ text }) => {
  return <Text style={styles.subheading}>{text}</Text>;
};

const styles = StyleSheet.create({
  subheading: {
    fontSize: 18,
    fontWeight: 'bold', 
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default SubheadingComponent;
