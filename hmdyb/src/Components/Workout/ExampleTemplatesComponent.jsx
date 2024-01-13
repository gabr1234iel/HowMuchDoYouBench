
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SubheadingComponent from '../SubheadingComponent';

const ExampleTemplatesComponent = () => {
  return (
    <View style={styles.container}>
      <SubheadingComponent text="Example Templates" />
      <Text style={styles.placeholderText}>Template list coming soon...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginVertical: 10,
  },
  placeholderText: {
    color: '#333',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default ExampleTemplatesComponent;
