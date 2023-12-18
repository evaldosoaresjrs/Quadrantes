import React from 'react'
import {StyleSheet} from 'react-native'
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TitleScreen, SignInScreen, LoginScreen} from './StartScreen';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TitleScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkgray',
    position: 'absolute',
    zIndex: 99,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 50,
    color: 'white',
  },
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.5)', 
    textShadowOffset: { width: 2, height: 2 }, 
    textShadowRadius: 5, 
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(12, 153, 68)',
    height: 80,
    width: 300,
    padding: 10,
    borderRadius: 40,
    top: 140,
  },
  loginText: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 40,
    top: 160,
    color: 'white',
    fontSize: 25,
    zIndex: 2,
  },
  buttonText: {
    color: "white",
    fontSize: 33,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;