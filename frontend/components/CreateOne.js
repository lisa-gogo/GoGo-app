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

function CreateOne({navigation}) {

    const toLogin = () => {
        navigation.navigate('Login');
      };

  return (
    <View>
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

export default CreateOne