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
import { TextInput } from 'react-native-gesture-handler';

function Register() {
  return (
    <View style={styles.body}>
              <View>
                   <Text style={styles.text}> First Name </Text>
                   <TextInput style={styles.input} placeholder='e.g Lisa'></TextInput>
                    <Text style={styles.text}> Gender </Text>
                     <TextInput style={styles.input} placeholder='e.g female'></TextInput>
                     <Text style={styles.text}> Health Condition </Text>
                     <TextInput style={styles.input} placeholder='e.g nice'></TextInput>
                     <Text style={styles.text}> Password </Text>
                     <TextInput style={styles.input} placeholder='e.g must over 6 characters'></TextInput>
                      <Pressable
                        style={styles.button}
                       >
                      <Text style={styles.button}>Submit</Text> 
        </Pressable>
              </View>
              <View>
                   <Text style={styles.text}> Last Name </Text>
                   <TextInput style={styles.input} placeholder='e.g Li'></TextInput>
                   <Text style={styles.text}> Job </Text>
                   <TextInput style={styles.input} placeholder='e.g developer'></TextInput>
                   <Text style={styles.text}> Email </Text>
                   <TextInput style={styles.input} placeholder='e.g lisa@gmail.com'></TextInput>
                   <Text style={styles.text}> Comfirm Password </Text>
                   <TextInput style={styles.input} placeholder='e.g '></TextInput>
              </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    display: "flex",
    flexDirection: 'column',
    flexWrap: "wrap",
  },
  text: {
    fontSize: 20,
    fontWeigt: 'bold',
    margin: 10,
    color: '#1E90FF',
 
  },
  test: {
      backgroundColor: 'red',
  },
  input: {
      borderWidth:2,
      borderColor: "#A9A9A9",
      borderRadius: 10,
      width: 200,
      height: 40,
      margin: 5,
     
      textAlign: 'center',
  },
  button: {
      fontSize: 20,
      margin: 5,
      color: 'white',
      backgroundColor:'#1E90FF',
      textAlign: 'center'

  },

  scrollView: {
      width: "100%",
      
      
      
  }
}); 

export default Register