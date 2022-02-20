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
import {useSelector} from 'react-redux';


function Cruise({navigation}) {
     const user = useSelector((state)=>state.user.value)
    const toLogin = () => {
        navigation.navigate('Login');
      };
      // async storage ----start 
       const [name, setName]=useState('')
    
    // useEffect(()=>{
    //   getData()
    // },[])


    //  const getData=()=>{
    //   try {
    //     AsyncStorage.getItem('user')
    //     .then(value=>{
    //       if(value != null){
    //         setName(value)
    //       }
    //     })
    //   } catch (error) {
    //     console.log(err)
    //   }
    //  }
     // async storage------end -------------

     // logout ------- start -----
      const handleLogOut= async ()=>{
      try {
       await AsyncStorage.removeItem('user')
        navigation.navigate('Login')
        
      } catch (error) {
        console.log(err)
      }
     }
     // logout ---------end-----

  return (
    <View>
           <Text>Hello,{user.name}</Text>
           <View style={GlobalStyles.loginLogOut}>
                <Pressable
              onPress={toLogin} style={GlobalStyles.globalButton}
              >
              <Text style={GlobalStyles.buttonText}>Login</Text>
            </Pressable>
            <Pressable
              onPress={handleLogOut} style={GlobalStyles.globalButton}
              >
              <Text style={GlobalStyles.buttonText}>Logout</Text>
            </Pressable>
           </View>
          
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