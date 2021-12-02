import React from 'react';

// import { Container } from './styles';
import {View,Text, TouchableOpacity} from 'react-native';
export default function logout(props) {

  const handleLogout = () => {
    // while(props.navigation.canGoBack()){
    //   props.navigation.pop();
    // }
    props.navigation.navigate('login');
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
      <TouchableOpacity onPress={()=>{handleLogout();}} >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
