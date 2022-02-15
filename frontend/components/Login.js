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
import { TextInput } from 'react-native-gesture-handler';


function Login({navigation}) {

    const toRegister =()=>{
        navigation.navigate('Register');
    }

  return (
    <View style={styles.body}>
      <Text style={styles.text}> username </Text>
       <TextInput style={styles.input} placeholder='e.g Lisa'></TextInput>
       <Text style={styles.text}>password </Text>
       <TextInput style={styles.input} placeholder='e.g Lisa'></TextInput>

        <Pressable
        onPress={toRegister}
        >
        <Text style={styles.button}>Register</Text> 
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
    fontSize: 20,
    fontWeigt: 'bold',
    margin: 10,
  },
  input: {
      borderWidth:2,
      borderColor: "#A9A9A9",
      width: 130,
      height: 40,
      margin: 5,
  },
  button: {
      fontSize: 20,
      margin: 5,
      color: '#1E90FF',

  }
}); 

export default Login;