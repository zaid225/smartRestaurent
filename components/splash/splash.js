import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    flex: 1,
  },
  mytext: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 36,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 150,
    position: 'absolute',
    fontFamily: 'Poppins , sans-serif',
  },
});
class Splash extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('welcome');
    }, 1000);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <Image style={styles.logo} source={require('../../assets/logo1.png')} />
        <Text style={styles.mytext}>Smart Restaurant</Text>
      </View>
    );
  }
}

export default Splash;
