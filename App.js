import React, { Component } from 'react';
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
  AppRegistry,
  Button,
  AsyncStorage
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Splash from './components/splash/splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {HeaderBackButton} from '@react-navigation/stack';

import welcome from './components/welcome/welcome';
import Icon from 'react-native-vector-icons/FontAwesome';
import login from './components/login/login';
import hello from './components/hello/hello';
import home from './components/home/home';
import { tokenKey } from './server/server';

const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
  custom: {
    backgroundColor: '#fff',
    borderRadius: 12,
  }
});

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Smart Restaurant" component={Splash}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="welcome" options={{
            headerShown: false,
            headerBackVisible: false,
            headerLeft: (props) => {
              <TouchableOpacity style={styles.custom} {...props} onPress={() => { this.props.navigation.navigate('splash') }}>
              <Icon name="arrow-left" size={30} color="#FFCC63" />
            </TouchableOpacity>
            },
            title: '',


          }} component={welcome} />
          <Stack.Screen name="login" options={{
            headerShown: false,
            headerBackVisible: false,
            title: '',


          }} component={login} />
          <Stack.Screen name='hello' component={hello}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='home' component={home}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>

      </NavigationContainer>
    );
  }
}

export default App;
