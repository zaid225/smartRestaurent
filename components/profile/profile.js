import React from 'react';

// import { Container } from './styles';
import {View, Text, StyleSheet,KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';

export default function profile() {
  const [text, setText] = React.useState('');

  return (
    <>
      <View style={styles.container}>
        <KeyboardAvoidingView enabled={true}>
        <View style={{alignItems: 'center', marginTop: 50}}>
          <TextInput
            mode="outlined"
            label="Full Name"
            placeholder="Full Name"
            style={styles.myinput}
          />
        </View>
        <View style={{alignItems: 'center', marginTop:15}}>
          <TextInput
            mode="outlined"
            label="Email Address"
            placeholder="Email Address"
            style={styles.myinput}
          />
        </View>
        <View style={{alignItems: 'center', marginTop:15}}>
          <TextInput
            mode="outlined"
            label="Phone Number"
            placeholder="Phone Number"
            style={styles.myinput}
          />
        </View>
        <View style={{alignItems: 'center', marginTop:15}}>
          <TextInput
            mode="outlined"
            label="Current Address"
            placeholder="Current Address"
            style={styles.myinput}

          />
        </View>
        <View style={{alignItems:'center', justifyContent:'center',flexDirection:'row',marginTop:15}}>
        <TextInput
            mode="outlined"
            label="Zip Code"
            placeholder="Zip Code"
            style={{width:"35%"}}

          /> 
          <TextInput
            mode="outlined"
            label="State"
            placeholder="State"
            style={{width:"40%",marginLeft:10}}

          /> 
          
        </View>
        <View style={{alignItems: 'center', marginTop:15}}>
          <TextInput
            mode="outlined"
            label="Password"
            placeholder="Password"
            style={styles.myinput}
          />
        </View>
        </KeyboardAvoidingView>
       
      </View>
      <View style={{marginTop:20}}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Update Profile</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
  myinput: {
    width: '80%',
    border: 'black',
    borderRadius:15
  },
  btn: {
    backgroundColor: '#FFCC63',
    height: 61,
    borderWidth: 0,
    width: '80%',
    borderRadius: 16,
    justifyContent: 'center',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    fontSize: 18,
    padding: 4,
    marginRight: 1,
    alignSelf: 'center',
    border: 'none',
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Poppins',
  },
});
