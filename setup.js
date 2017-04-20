import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import { Drawer } from 'native-base'
import App from './app'
import SideBar from './sidebar'
import Crashes from "mobile-center-crashes";

export default class Setup extends Component{


    render()
    {

      //Crashes.setEnabled(true);
      //Crashes.process((report, sendCallback) => {sendCallback(true);}).catch((err) => {});
      return (

              <App/>

        );

 
        
    }


  async componentWillMount() {

     /* await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });*/

  }


}
AppRegistry.registerComponent('poneyexpress', () => Setup);
