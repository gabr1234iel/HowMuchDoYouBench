import React, { useCallback, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import EmailSignIn from '../../Components/AuthComponent/EmailSignIn';
import EmailSignUp from '../../Components/AuthComponent/EmailSignUp';


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

    const [showSignUp, setShowSignUp] = useState(false);
    const [pendingVerification, setPendingVerification] = useState(false);

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/images/hmdyb-logo.png')}
            style={styles.logoImage}
          />
          {!pendingVerification && <Text style={styles.titleText}>How Much Do You Bench</Text>}
  
          {showSignUp ? (
            <EmailSignUp setPendingVerification={setPendingVerification} pendingVerification={pendingVerification}/>
          ) : (
            <EmailSignIn />
          )}
  
          {!pendingVerification && (
            <>
              <TouchableOpacity onPress={() => setShowSignUp(!showSignUp)}>
                <Text style={styles.switchText}>
                  {showSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                </Text>
              </TouchableOpacity>
      
              <View style={styles.orContainer}>
                <View style={styles.line} />
                <Text style={styles.orText}>OR</Text>
                <View style={styles.line} />
              </View>
      
              {/* Google Login Button */}
              <TouchableOpacity style={styles.authButton} onPress={handleGoogleLogin}>
                <FontAwesome name="google" style={styles.authIcon} />
                <Text style={styles.authButtonText}>Login with Google</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </TouchableWithoutFeedback>
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
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  authButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4285F4',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    width: '80%',
    marginBottom: 15,
  },
  authButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  authIcon: {
    color: '#fff',
    fontSize: 20,
  },
  switchText: {
    color: '#333',
    fontSize: 16,
    marginTop: 20,
},
orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
},
line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
},
orText: {
    width: 50,
    textAlign: 'center',
    color: '#333',
    fontSize: 16,
},
});