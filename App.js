import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AppHeader from './AppHeader';

export default class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
      
        <AppHeader />
        <Text style={{
          textAlign:'center',
          fontWeight:'bold',
          marginTop:50,
          marginBottom:25,
          border:'none',
          borderStyle:'dotted',
         borderTopEndRadius:20,
      
         
          fontSize:50
       

          
          }}> Search Box</Text>
        <HomeScreen />
      </View>
    )
  }
}
