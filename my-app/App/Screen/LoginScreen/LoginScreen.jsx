import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome
import * as WebBrowser from "expo-web-browser";
import * as Facebook from 'expo-auth-session/providers/facebook';
import { useWarmUpBrowser } from "../../../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";


WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {

    useWarmUpBrowser();
 
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
     
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);
     

  return (
    <View style={styles.container}>
        <Image
            source={require('../../../assets/images/hmdyb-logo.png')}
            style={styles.logoImage}
        />
        <Text style={styles.titleText}>How Much Do You Bench</Text>

        {/* Google Login Button */}
        <TouchableOpacity style={[styles.authButton, { backgroundColor: '#DB4437' }]} onPress={onPress}>
            <FontAwesome name="google" style={styles.authIcon} />
            <Text style={styles.authButtonText}>Login with Google</Text>
        </TouchableOpacity>

        {/* Facebook Login Button */}
        <TouchableOpacity style={[styles.authButton, { backgroundColor: '#3B5998' }]} onPress={() => { /* Handle Facebook login logic here */ }}>
            <FontAwesome name="facebook" style={styles.authIcon} />
            <Text style={styles.authButtonText}>Login with Facebook</Text>
        </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#fff',
    },
    logoImage: {
      width: 300,
      height: 70,
      resizeMode: 'contain',
      marginBottom: 20,
    },
    titleText: {
      fontSize: 20,
      color: '#333',
      marginBottom: 40,
    },
    authButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start', // Align items to the start
      backgroundColor: '#4285F4',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 20,
      shadowOpacity: 0.3,
      shadowRadius: 3,
      shadowColor: '#000',
      shadowOffset: { height: 0, width: 0 },
      width: '80%',
      marginBottom: 15,
    },
    buttonTextContainer: {
      flex: 1, // Take up all available space
      alignItems: 'center', // Align text to the center
      justifyContent: 'center', // Center text vertically
      marginLeft: -20, // Adjust this value to center the text as per your visual requirement
    },
    authButtonText: {
      color: '#fff',
      fontSize: 16,
    },
    authIcon: {
      color: '#fff',
      fontSize: 20,
      marginRight: 50, // Space between the icon and the text
    },
    // Add styles for other elements as needed
});