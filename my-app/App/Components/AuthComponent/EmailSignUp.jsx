import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Button } from 'react-native';
import { useSignUp } from '@clerk/clerk-expo';



const EmailSignUp = ({ setPendingVerification, pendingVerification }) => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [code, setCode] = useState("");

  const handleSignUp = async () => {
    if (!isLoaded) {
      return;
    }

    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    if (!email || !password) {
      console.error('Email and password are required');
      return;
    }

    try {
      await signUp.create({ emailAddress: email, password });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
    } catch (error) {
      console.error('Sign up error', error);
      if (error.errors && error.errors.length > 0) {
        error.errors.forEach(err => console.log(err.longMessage));
      }
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({ code });
      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err) {
      console.error('Verification error', err);
    }
  };

  const handleRetry = () => {
    setPendingVerification(false);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
};

  return (
    <View style={commonStyles.container}>
      {!pendingVerification && (
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
          <TextInput 
            placeholder="Confirm Password" 
            secureTextEntry 
            onChangeText={setConfirmPassword} 
            value={confirmPassword} 
            style={commonStyles.input} 
          />
          <TouchableOpacity onPress={handleSignUp} style={commonStyles.button}>
            <Text style={commonStyles.buttonText}>Create Account</Text>
          </TouchableOpacity>
        </View >
      )}
      {pendingVerification && (
        <View style={commonStyles.container}>
          <Text style={commonStyles.normalText}>We have sent a code to </Text>
          <Text style={commonStyles.email}>{email}</Text>
          <TextInput
            value={code}
            placeholder="Code..."
            onChangeText={setCode}
            style={commonStyles.input}
          />
          <TouchableOpacity onPress={onPressVerify} style={commonStyles.button}>
            <Text style={commonStyles.buttonText}>Verify Email</Text>
          </TouchableOpacity>


          <Button  title='Did not get code' 
          onPress={handleRetry} 
          color="tomato"
          />
        </View>
      )}
    </View>
  );
};

const commonStyles = StyleSheet.create({
  input: {
    width: '80%',
    alignSelf: 'center',
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
    marginTop: 'auto',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  container: {
    justifyContent: 'center',
    width: '100%',
    height: 225,
  },
  normalText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#333',
    marginTop:-40,
  },
  email: {
    textAlign: 'center',
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 30,
  },
});

export default EmailSignUp;
 