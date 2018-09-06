/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import call from 'react-native-phone-call';
//import RNImmediatePhoneCall from 'react-native-immediate-phone-call';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  callNumber = () =>{
    //RNImmediatePhoneCall.immediatePhoneCall('0123456789');
    
    const phoneNumber = {
      number: '8447493557', // String value with the number to call
      prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
    }
    const pin = {
      number: '1477512', // String value with the number to call
      prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
    }
    console.log("calling number");
    call(phoneNumber).catch(console.error)
    console.log("called number");
    this.setTimeout(() => {
      console.log("calling pin");
      call(pin).catch(console.error)
      console.log("called number");
    }, 3000);

    //window.plugins.CallNumber.callNumber(function(){}, function(){}, '8447493557', true);
 }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Text>Auto Dialer</Text>
          <View style={styles.holder}>
            <Button onPress={this.callNumber} title={"Make phonecall"}></Button>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
