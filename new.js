import React from 'react';
import { createStackNavigator, createAppContainer,createDrawerNavigator } from "react-navigation";
import Home from './App';
import One from './one';
import Two from './two';
import Three from './flatlist';
import triy from './tryy';
import apiim from './apiimp';
import sdata from './saveD';
import timr from './timee';
import iPic from './imagePic';
import bott from './bottom';
import forme from './formm';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingScreen';
import signed from './signedUp';
import dates from './date';
import Dimages from './Dimage';
import conrend from './conditional';

const root = createStackNavigator({
  Homeh: {screen: Home},
  onen: {screen:One},
  Twot: {screen: Two},
  three: {screen: Three},
  try: { screen: triy},
  apiim:{screen:apiim},
  savedat: { screen:sdata },
  timerr: {screen : timr},
  Ipic:{screen: iPic},
  botto:{screen: bott},
  formee: {screen: forme},
  signedu:{screen: signed},
  Di:{screen:Dimages},
  cr:{screen:conrend},
});
const AppNavigator = createDrawerNavigator({
  LogIn :{
    screen: root
  },
  SignUp :{
    screen: SettingsScreen
  },
  Date:{
    screen: dates
  },
  Exit:{
    screen: HomeScreen
  }
  
});

export default createAppContainer(AppNavigator);
