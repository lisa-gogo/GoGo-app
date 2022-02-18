import 'react-native-gesture-handler';
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


import {createDrawerNavigator} from '@react-navigation/drawer'
import CruiseDashboard from './Dashboard/CruiseDashboard';
import HotelDashboard from './Dashboard/HotelDashboard';

 const Drawer = createDrawerNavigator();

 function Dashboard() {
   
  return (
          <Drawer.Navigator >
                <Drawer.Screen name="Your cruises" component={CruiseDashboard} />
                <Drawer.Screen name="Your hotels" component={HotelDashboard} />
            </Drawer.Navigator>
  
  )
  }

export default Dashboard