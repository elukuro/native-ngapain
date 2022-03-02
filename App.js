import React from 'react';
import SplashPage from './pages/Splash.js';
import IntroPage from './pages/Intro';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={SplashPage} />
        <Stack.Screen name="Intro" component={IntroPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
