/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Linking,
  Button,
  View,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('Style Test');

  const onClickHandler = () => {
    setName('Style Test is Done');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}> {name}</Text>
      <Button title="Update State" onPress={onClickHandler}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '50%',
    backgroundColor: '#FAEBD7',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: '#DC143C',
    borderRadius: 10,
  },

  text: {
    color: '#000000',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
