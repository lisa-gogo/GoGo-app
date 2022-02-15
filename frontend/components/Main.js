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

function Main({navigation}) {

    const toLogin = () => {
        navigation.navigate('Login');
      };
    
      return (
        <View style={styles.body}>
          <Text style={styles.text}> Welcome </Text>
          <Pressable
            onPress={toLogin}
            style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
            <Text style={styles.text}>Login</Text>
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
    fontSize: 40,
    fontWeigt: 'bold',
    margin: 10,
  },
});

export default Main