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
import GlobalStyles from '../utils/GlobalStyles';
import {useSelector} from 'react-redux';


function Hotel({navigation}) {
    
    const user = useSelector((state)=>state.user.value)
   
    const toLogin = () => {
        navigation.navigate('Login');
      };
    
    const handleLogOut= async ()=>{
    try {
    await AsyncStorage.removeItem('user')
      navigation.navigate('Login')
      
    } catch (error) {
      console.log(err)
    }
  }

   

  return (
    <View>
       <Text>Hello, {user.name}</Text>
       <View style={GlobalStyles.loginLogOut} >
           <Pressable
            onPress={toLogin} style={GlobalStyles.globalButton}
            >
            <Text style={GlobalStyles.buttonText} >Login</Text>
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
  button: {
      fontSize: 30,
      margin: 5,
      color: 'white',
      backgroundColor:'#1E90FF',
      textAlign: 'center',
      width: 100,
       
  },
});

export default Hotel