import React ,{useState,useEffect} from 'react'
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Alert
} from 'react-native';

import { TextInput } from 'react-native-gesture-handler';
import GlobalStyles from '../utils/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useDispatch} from 'react-redux'
import {login, logout} from '../redux/user'

function Login({navigation}) {
    
    const dispatch = useDispatch()
 

    const [name, setName] = useState('')
    const [password,setPassword] = useState('')

    const toRegister =()=>{    
          navigation.navigate('Register');
    }

    // AsyncStorage getItem starts first ------start --------
     useEffect(()=>{
      getData()
    },[])


     const getData=()=>{
      try {
        AsyncStorage.getItem('user')
        .then(value=>{
          if(value != null){
            navigation.navigate('Cruise Ship')
          }
        })
      } catch (error) {
        console.log(err)
      }
     }


    // Async --------------end --------------

    // to criuse ship page ----- start 
        const toCruises = async()=>{
        if(name.length == 0 || password.length==0){
          Alert.alert('Warning!','Please write all information ')
        }else{
         
         try {
            dispatch(login({name:name,email:'lisa@gmail.com'}))
            await AsyncStorage.setItem('user',name)
         } catch (error) {
           console.log(error)
         }
          navigation.navigate('Cruise Ship');
        }
    }

    // to cruise ship page ---------end 

  return (
    <View style={styles.body}>
      <Image style={styles.logo}
       source={require('../utils/logo.jpg')}
      ></Image>
      <Text style={styles.text}> username</Text>
       <TextInput 
       style={styles.input} 
       placeholder='e.g Lisa'
       onChangeText={(value)=>setName(value)}
       ></TextInput>
       <Text style={styles.text}>password </Text>
       <TextInput 
              style={styles.input} 
              placeholder='e.g Lisa'
              onChangeText={(value)=>setPassword(value)}
         ></TextInput>
        <Pressable
              onPress={toCruises} 
              style={GlobalStyles.globalButton}
            >
              <Text style={GlobalStyles.buttonText}>Login</Text> 
        </Pressable>
        <Pressable
            onPress={toRegister} 
            style={GlobalStyles.globalButton}
          >
            <Text style={GlobalStyles.buttonText}>Register</Text> 
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
   logo: {
     width:100,
     height: 100,
     margin: 20,
     borderRadius: 10
   }
}); 

export default Login;