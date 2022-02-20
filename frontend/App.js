/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from'@react-navigation/native-stack';
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';
import { Provider } from 'react-redux';

import {configureStore} from '@reduxjs/toolkit';
import userReducer from './redux/user';


const Stack = createNativeStackNavigator();

const store = configureStore({
  reducer:{
    user:userReducer,
  },
})

const App = () => {
 
  return (
      <Provider store={store}>
            <NavigationContainer>
            <Stack.Navigator
            //  screenOptions={{header: () => null}}
            >
              <Stack.Screen name="Main" component={Main} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
          </NavigationContainer>
      </Provider>
     
   
    
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeigt: 'bold',
    margin: 10,
  },
});

export default App;
