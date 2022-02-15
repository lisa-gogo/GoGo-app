/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
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
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const ScreenA = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}> ScreenA </Text>
    </View>
  );
};
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenA" component={ScreenA} />
      </Stack.Navigator>
    </NavigationContainer>
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
