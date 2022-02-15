import React from 'react'
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

import { } from '@react-navigation/native'


function Login({navigation}) {

    const toRegister =()=>{
        navigation.navigate('Register');
    }

  return (
    <View style={styles.body}>
      <Text style={styles.text}> Login </Text>
        <Pressable
        onPress={toRegister}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text style={styles.text}>Register</Text> 
        </Pressable>
    </View>
      );
  
}

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

export default Login;