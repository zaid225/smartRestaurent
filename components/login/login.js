import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  useWindowDimensions,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

// import { Container } from './styles';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    top: 0,
    left: 0,
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 0,
    bottom: 0,
  },
  logo: {
    width: 150,
    height: 150,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    left: 0,
    right: 0,
    top: 30,
  },
  mytext: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins , sans-serif',
    top: 20,
  },
  heading: {
    fontWeight: 'bold',
    fontFamily: 'Poppins , sans-serif',
    position: 'absolute',
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    bottom: 0,
  },
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    width: '100%',
    flex: 0.5,
    overflow: 'hidden',
  },
  input: {
    height: 61,
    borderWidth: 0,
    width: '90%',
    backgroundColor: '#EFF0F7',
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
  btn: {
    backgroundColor: '#FFCC63',
    height: 61,
    borderWidth: 0,
    width: '90%',
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
const FirstRoute = () => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView enabled={true} behavior="height" style={{flex: 1}}>
        <SafeAreaView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
              style={{color: 'black', justifyContent: 'center', marginTop: 25}}>
              <View>
                <TextInput style={styles.input} placeholder="Username" />
              </View>
              <View style={{marginTop: 20}}>
                <TextInput style={styles.input} placeholder="Password" />
              </View>

              <View style={{marginTop: 20}}>
                <TouchableOpacity style={styles.btn}   >
                  <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
              </View>
              <View></View>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const SecondRoute = () => {
  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView enabled={true} behavior="height">
          <View
            style={{color: 'black', justifyContent: 'center', marginTop: 25}}>
            <View>
              <TextInput style={styles.input} placeholder="Create a Username" />
            </View>
            <View style={{marginTop: 20}}>
              <TextInput style={styles.input} placeholder="Create a Password" />
            </View>
            <View style={{marginTop: 20}}>
              <TextInput style={styles.input} placeholder="Confirm Password" />
            </View>

            <View style={{marginTop: 20}}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Create Account</Text>
              </TouchableOpacity>
            </View>
            <View></View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
};

const renderScene = SceneMap({
  Login: FirstRoute,
  Register: SecondRoute,
});
export default function login() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Login', title: 'Login'},
    {key: 'Register', title: 'Register'},
  ]);
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/logo1.png')} />
        <Text style={styles.mytext}>Fine Dine</Text>
      </View>
      <View style={styles.container1}>
        <Text style={styles.heading}>Enter your details to login</Text>
      </View>

      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{backgroundColor: 'white', color: 'black'}}
            style={{backgroundColor: 'white', color: 'black'}}
            indicatorStyle={{backgroundColor: 'black', color: '#fff'}}
            renderLabel={({route, focused, color}) => (
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  margin: 10,
                }}>
                {route.title}
              </Text>
            )}
          />
        )}
      />
    </>
  );
}
