import 'react-native-gesture-handler';
import React,{useEffect, useState} from 'react'
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


import {createDrawerNavigator} from '@react-navigation/drawer'
import CruiseDashboard from './Dashboard/CruiseDashboard';
import HotelDashboard from './Dashboard/HotelDashboard';
import AsyncStorage from '@react-native-async-storage/async-storage';

 const Drawer = createDrawerNavigator();

 function Dashboard({navigation,route}) {

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
  return (
          <Drawer.Navigator >
               
                <Drawer.Screen name="Your cruises" component={CruiseDashboard} />
                <Drawer.Screen name="Your hotels" component={HotelDashboard} />
            </Drawer.Navigator>
  
  )
  }

export default Dashboard