import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import LoginScreen from './App/Screen/AuthScreen/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut  } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';


const tokenCache = {
  
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};


export default function App() {

  const [fontsLoaded] = useFonts({
    'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-medium' : require('./assets/fonts/Roboto-Medium.ttf'),
    'roboto-bold' : require('./assets/fonts/Roboto-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={'pk_test_YW1hemluZy1oYWdmaXNoLTUyLmNsZXJrLmFjY291bnRzLmRldiQ'}>
       <SafeAreaView style={styles.safeArea}>
          <View style={styles.container} onLayout={onLayoutRootView}>
            <SignedIn>
              <NavigationContainer>
                <TabNavigation/>
              </NavigationContainer>
            </SignedIn>
            <SignedOut>
              <LoginScreen/>
            </SignedOut>
            <StatusBar style="auto" />
          </View>
       </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingTop:45,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#f7f7f7', // Set this to your desired page color
  },
  
});
