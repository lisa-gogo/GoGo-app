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
  const [name, setName] = useState('Mash');
  const [session, setSession] = useState({number: 6, title: 'state'});
  const onClickHandler = () => {
    setName('Programming with Mash');
    setSession({number: 7, title: 'Style'});
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}> {name}</Text>
      <Text style={styles.text}>
        This is session number {session.number} and about {session.title}
      </Text>
      <Button title="Update State" onPress={onClickHandler}>
        {}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FAEBD7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#000000',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
