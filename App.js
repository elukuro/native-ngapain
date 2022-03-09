import React from 'react';
// import 'react-native-gesture-handler';
import SplashPage from './pages/Splash';
import IntroPage from './pages/Intro';
import MainPage from './pages/Main';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// const MainNavigator = () => {
//   return (
//     <Drawer.Navigator initialRouteName="Main">
//       <Drawer.Screen name="Main" component={MainPage} />
//     </Drawer.Navigator>
//   );
// };

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
        <Stack.Screen name="Main" component={MainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
