import React from 'react';
import {View,
Text,
TouchableOpacity,
StyleSheet,
Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import { Container } from './styles';
const styles=StyleSheet.create({
btnText:{
  color:'black',
  marginTop:20,
  fontWeight:'bold',
  textAlign: 'right',
  marginRight:20
},
container:{
  backgroundColor:'#FFCC63',
  width:"100%",
  
},
imgContainer:{
  backgroundColor:'#FFCC63',
  width:"100%",
  alignItems:'center',
  justifyContent:'center',
  flex:1
},
image:{
  width: 400,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    flex: 1,
    objectFit: 'cover'

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
  fontSize: 16,
  fontFamily: 'Poppins , sans-serif',
  left: 0,
  right: 0,
  top: 10,
  bottom:0
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
});
export default function hello({navigation}) {
  const navigate = async () => {
 navigation.navigate('home')
  }
  return (
    <>
    <View style={styles.container}>
<TouchableOpacity onPress={() => {navigate()}}><Text style={styles.btnText}>Skip</Text></TouchableOpacity>
    </View>
    <View style={styles.imgContainer}>
   <Image style={styles.image} source={require('../../assets/MaskGroup.png')} />
    </View>
    <View style={styles.container2}>
        <Text style={styles.heading}>Make it easier for you</Text>
        <Text style={styles.paragraph}>
        We are here ready serve you order 24 hour nonstop, so you can enjoy your holidays
        </Text>
        <View 
          style={{
            justifyContent: 'flex-end',
            flex: 0.8, 
            alignItems: 'flex-end',
            right: '3.0%',
          }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate('welcome');
            }}>
            <Icon name="arrow-right" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
} 
