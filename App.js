/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
          * @flow
          */

          import React, {Component} from 'react';
          import {Platform, StyleSheet,TextInput,Text, View} from 'react-native';

          const instructions = Platform.select({
          ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
          android:
          'Double tap R on your keyboard to reload,\n' +
          'Shake or press menu button for dev menu',
      });

          type Props = {};
          export default class App extends Component<Props> {


              constructor() {
                  super();
                  this.state = {text:'Useless PlaceHolder'}
              }

              render() {
          return (
          <View style={styles.container}>
          <Text style={styles.welcome}>preqel Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
              <View style={{flex:1,flexDirection:'column'}}>

                  <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                  <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                  <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />

              </View>
              <TextInput style={{height:41}} value={this.state} onChangeText={(text=> this.setState(text))}/>
              <TextInput style={{height:40}} value={this.state.text} onChangeText={(text)=>this.setState({text})}></TextInput>

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
