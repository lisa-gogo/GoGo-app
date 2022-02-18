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

import CreateOne from './CreateOne';
import Cruise from './Cruise';
import Hotel from './Hotel';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Dashboard from './Dashboard';
import { black } from 'react-native-paper/lib/typescript/styles/colors';



// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator()

function Main({navigation}) {

    const toLogin = () => {
        navigation.navigate('Login');
      };
    
      return (
       
         
            <Tab.Navigator screenOptions={ ({route}) => ({tabBarIcon:({focused, size,color})=>{
                let iconName;
                if(route.name === 'Cruise Ship'){
                   iconName = "ship";
                   size =focused? 22:18;
                  //  color = focused ? 'white':'#FFC0CB';
                } else if (route.name === 'Hotel'){
                    iconName ="hotel";
                     size =focused? 22:18;  
                } else if (route.name === 'Create One') {
                   iconName ="plus-circle";
                    size =focused? 22:18;  
                } else if (route.name === 'My Dashboard'){
                  iconName= "clipboard-list";
                  size =focused? 22:18;
                }
                return (
                    <FontAwesome5 name={iconName} size={size} color='black' solid/>
                )
        },  tabBarColor:'pink', tabBarLabelStyle: {fontSize:10,color:'black'}})}  >
                <Tab.Screen name="Cruise Ship" component={Cruise} />
                <Tab.Screen name="Hotel" component={Hotel} />
                <Tab.Screen name="Create One" component={CreateOne} />
                <Tab.Screen name="My Dashboard" component={Dashboard}/>
             </Tab.Navigator>
     
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

export default Main