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

function CreateOne({navigation}) {

    const toLogin = () => {
        navigation.navigate('Login');
      };

  return (
    <View>
        <Pressable
            onPress={toLogin} style={styles.button}
            >
            <Text >Login</Text>
          </Pressable>
         </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  text: {
    fontSize: 40,
    margin: 10,
  },
  button: {
      fontSize: 30,
      margin: 5,
      color: 'white',
      backgroundColor:'#1E90FF',
      textAlign: 'center',
      width: 100,
       
  },
});

export default CreateOne