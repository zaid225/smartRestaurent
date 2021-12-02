import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { tokenKey } from '../../server/server';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFCC63',
    top: 0,
    left: 0,
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    bottom: 20,
  },
  image: {
    width: 200,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    flex: 1,
  },
  container2: {
    width: '100%',
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#fff',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    height: '28%',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    top: 10,
    fontFamily: 'Poppins ,  sans-serif',
  },
  paragraph: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Poppins , sans-serif',
    left: 0,
    right: 0,
    top: 10,
  },
  btn: {
    backgroundColor: '#FFCC63',
    borderRadius: 10,
    width: 43,
    height: 43,
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    position: 'absolute',
  },
  topContainer: {
    backgroundColor: '#fff',
  },
  btn1: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 43,
    height: 43,
    border: 'none',
  },
});
export default function welcome({navigation}) {
  return (
    <>
      <View style={styles.container}>
        {/* <TouchableOpacity style={styles.btn1}  onPress={()=>{navigation.navigate('login')}}>
             <Icon name="arrow-left"  size={30} color="#FFCC63" />
</TouchableOpacity> */}
        <Image
          style={styles.image}
          source={require('../../assets/TheMunchiesBowl.png')}
        />
      </View>
      <View style={styles.container2}>
        <Text style={styles.heading}>Healthy food first</Text>
        <Text style={styles.paragraph}>
          We always serve best food you, and give you healty food recomendation.
          If you want junk food, please dont tell captain
        </Text>
        <View 
          style={{
            justifyContent: 'flex-end',
            flex: 0.8, 
            alignItems: 'flex-end',
            right: '3.09%',
          }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              AsyncStorage.getItem(tokenKey)?
              navigation.navigate('home')
              :
              navigation.navigate('login');
            }}>
            <Icon name="arrow-right" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
