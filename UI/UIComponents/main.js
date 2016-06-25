'use strict'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  BackAndroid,
  AsyncStorage,
  Image
} from 'react-native';

import Dimensions from 'Dimensions'
const window  = Dimensions.get('window')
const windowWidth = window.width

class Main extends Component {

  render() {
    return (
      
        <Image style = {styles.homeBgImage}
         source={require('../res/home_bg.png')}>
            
            <View style={styles.topNavBar}>
              <Text style={styles.topNavBarTitle}>Urban Services</Text>
            </View>
            
            <View style={{flex : 1}}>

            <View style={{flex : 1,justifyContent:'center'}} >
              <Text style={styles.homeButtonText}>Services</Text>
            </View>

             <View style={{flex : 1,alignItems:'center'}} >
              
              <TouchableHighlight style={styles.homeButton}>
              <Text style={styles.homeButtonText}>Water Can</Text>
              </TouchableHighlight> 
              
             
            </View>

            <View style={{flex : 1,alignItems:'center'}} >
              <TouchableHighlight style={styles.homeButton}>
              <Text style={styles.homeButtonText}>Laundry</Text>
              </TouchableHighlight>
            </View>

             <View style={{flex : 2,borderColor:'red',borderWidth:1}} >
              <Text>Sign In With Google</Text>
            </View>
          

            </View>
            
            


        </Image>
      
      
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
  homeBgImage : {
    flex : 1,
    width : null,
    height : null,
  },
  topNavBar : {
    height : 50,
    backgroundColor : '#00bcd4',
    elevation : 10,
    justifyContent : 'center'

  },
  topNavBarTitle : {
    alignItems : 'center',
    textAlign : 'center',
    fontSize : 22,
    fontWeight : "bold",
    color : 'white'

  },
  homeButton : {

  width: windowWidth * 0.6, 
  //backgroundColor : 'green', 
  height : 80,
  borderColor : 'white',
  borderWidth : 3,
  borderRadius : 5,
  justifyContent : 'center'

  },
  homeButtonText : {
  fontSize : 28,
  textAlign : 'center',
  color : 'white'
  }

});

export default Main
