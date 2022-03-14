import React from 'react';
// import 'react-native-gesture-handler';
import SplashPage from './pages/Splash';
import IntroPage from './pages/Intro';
import MainPage from './pages/Main';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawer from './components/CustomDrawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function LogoTitle() {
  return null;
}

const MainNavigator = ({}) => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          height: 40,
        },
      }}>
      <Drawer.Screen
        name="Homepage"
        component={MainPage}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
        }}
      />
    </Drawer.Navigator>
  );
};

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
        <Stack.Screen name="MainNavigator" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
