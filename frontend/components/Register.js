import React,{useState} from 'react'
// import {Picker} from '@react-native-picker/picker';

import { Picker } from 'react-native-woodpicker'



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


function Register({navigation}) {
  const [first_name,setName] = useState('');
  const [gender,setGender] = useState('')
  const [health_condition,setHealth] = useState('')
  const [password,setPassword] = useState('')
  const [last_name,setLastName] = useState('')
  const [job,setJob] = useState('')
  const [email,setEmail] = useState('')
  const [password2,setConfirmPassword] = useState('')
  

   const data = [
    { label: "Female",value: 1},
    { label: "Male" , value: 2},
  ];

  // const testtest =(e)=>{
  //     console.log(e)
  //     setName(e)
  // }

  const onSubmitForm = async () =>{
      
      console.log('why')
   
       const body = { first_name:first_name,last_name:last_name,gender:gender,job:job,health_condition:health_condition,email:email,password:password,password2:password2 };
      console.log(body)
      await fetch("http://10.0.2.2:5000/users/register", {
        method: "POST",
         headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then( navigation.navigate('Login')).catch(err=>{console.log(err)})

      // window.location = "/";
     
  }
  return (
    <View style={styles.body}>
              <View>
                   <Text style={styles.text}> First Name </Text>
                    <TextInput 
                              onChangeText={ (e)=>{setName(e);} } 
                              value={first_name}
                              style={styles.input} 
                              placeholder='e.g Lisa'>  
                     </TextInput>
                   <Text style={styles.text}> Gender </Text>
                    <TextInput 
                              onChangeText={ (e)=>{setGender(e);} } 
                              value={gender}
                              style={styles.input} 
                              placeholder='e.g female'>  
                     </TextInput>
                     <Text style={styles.text}> Health Condition </Text>
                     <TextInput 
                            style={styles.input} 
                            placeholder='e.g nice'
                            onChangeText={e => {setHealth(e) }} 
                            value={health_condition}
                            > 
                      </TextInput>
                     <Text style={styles.text}> Password </Text>
                     <TextInput 
                             style={styles.input} 
                             placeholder='e.g must over 6 characters'
                              onChangeText={e =>{ setPassword(e)} } 
                              value={password}
                             >
                      </TextInput>
                      <Pressable
                        style={GlobalStyles.globalButton}
                       >
                      <Text onPress={onSubmitForm} style={GlobalStyles.buttonText}>Submit</Text> 
                      </Pressable>
              </View>
              <View>
                   <Text style={styles.text}> Last Name </Text>
                   <TextInput 
                          style={styles.input} 
                          placeholder='e.g Li'
                           onChangeText={e => {setLastName(e)} } 
                              value={last_name}
                          >
                    </TextInput>
                   <Text style={styles.text}> Job </Text>
                   <TextInput 
                         style={styles.input} 
                         placeholder='e.g developer'
                         onChangeText={e => {setJob(e)} } 
                         value={job}
                         ></TextInput>
                   <Text style={styles.text}> Email </Text>
                   <TextInput 
                          style={styles.input} 
                          placeholder='e.g lisa@gmail.com'
                          onChangeText={ e => { setEmail(e) } } 
                          value={email}
                       >
                    </TextInput>
                   <Text style={styles.text}> Comfirm Password </Text>
                   <TextInput 
                        style={styles.input} 
                        placeholder='e.g '
                        onChangeText={e => {setConfirmPassword(e)} } 
                        value={password2}
                    ></TextInput>
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
      width: 180,
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

  },
  select: {
    borderWidth:2,
    borderColor: "#A9A9A9",
    borderRadius: 10,
    width: 180,
    height: 40,
    margin: 5,
  }
}); 

export default Register