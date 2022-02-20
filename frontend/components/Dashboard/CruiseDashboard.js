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
import {useSelector} from 'react-redux'

function CruiseDashboard() {
  const user = useSelector((state)=>state.user.value)
  return (
    <View>
        <Text>Your cruise</Text>
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
    </View>
  )
}

export default CruiseDashboard