import React from 'react';
import UiHome from './pages/Home.js';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const switchNavigator = createStackNavigator(
  {
    welcomeFlow: UiHome,
  },
  {
    headerMode: 'none',
  },
);

const App = createAppContainer(switchNavigator);

export default App;
