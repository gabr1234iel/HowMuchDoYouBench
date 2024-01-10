import React, { useCallback } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {

    useWarmUpBrowser();
    // Google Auth
    const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });
    const handleGoogleLogin = useCallback(async () => {
      try {
        const { createdSessionId, setActive } = await startOAuthFlow();
        if (createdSessionId) {
          setActive({ session: createdSessionId });
        }
      } catch (err) {
        console.error('OAuth error', err);
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
            <TouchableOpacity style={[styles.authButton, { backgroundColor: '#DB4437' }]} onPress={handleGoogleLogin}>
                <FontAwesome name="google" style={styles.authIcon} />
                <Text style={styles.authButtonText}>Login with Google</Text>
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
      backgroundColor: '#f7f7f7',
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
      justifyContent: 'flex-start',
      backgroundColor: '#DB4437',
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
