import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useSignIn } from '@clerk/clerk-expo';

const EmailSignIn = () => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    if (!isLoaded) {
      return;
    }

    if (!email || !password) {
      console.error('Email and password are required');
      return;
    }

    try {
      const completeSignIn = await signIn.create({ identifier: email, password });
      await setActive({ session: completeSignIn.createdSessionId });
      console.log('Login successful', completeSignIn.createdSessionId);
    } catch (error) {
      console.error('Sign in error', error);
      if (error.errors) {
        error.errors.forEach(err => console.log(err.longMessage));
      }
    }
  };

  return (
    <View style={commonStyles.container}>
      <TextInput 
        autoCapitalize="none"
        placeholder="Email" 
        onChangeText={setEmail} 
        value={email} 
        style={commonStyles.input} 
      />
      <TextInput 
        placeholder="Password" 
        secureTextEntry 
        onChangeText={setPassword} 
        value={password} 
        style={commonStyles.input} 
      />
      <TouchableOpacity onPress={handleSignIn} style={commonStyles.button}>
        <Text style={commonStyles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};


const commonStyles = StyleSheet.create({
  input: {
    width: '80%', // Ensure consistent width
    alignSelf: 'center', // Align input to the center
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'tomato', // Brand color for the button
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    width: '80%', // Ensure button width matches input fields
    alignSelf: 'center', // Align button to the center
    marginTop:'auto',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  container: {
    justifyContent: 'center', // Align content to the center vertically
    width: '100%', // Ensure container takes full width
    height: 225,

  },
});



export default EmailSignIn;
