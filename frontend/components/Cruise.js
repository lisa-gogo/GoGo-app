import React , {useState,useEffect}from 'react'
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
import GlobalStyles from '../utils/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Cruise({navigation}) {

    const toLogin = () => {
        navigation.navigate('Login');
      };
      // async storage ----start 
       const [name, setName]=useState('')
    
    useEffect(()=>{
      getData()
    },[])


     const getData=()=>{
      try {
        AsyncStorage.getItem('user')
        .then(value=>{
          if(value != null){
            setName(value)
          }
        })
      } catch (error) {
        console.log(err)
      }
     }
     // async storage end -------------

  return (
    <View>
           <Text>Hello,{name}</Text>
           <Pressable
            onPress={toLogin} style={GlobalStyles.globalButton}
            >
            <Text style={GlobalStyles.buttonText}>Login</Text>
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
});



export default Cruise