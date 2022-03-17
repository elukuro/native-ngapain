import React from 'react';
// import 'react-native-gesture-handler';
import SplashPage from './pages/Splash';
import IntroPage from './pages/Intro';
import MainPage from './pages/Main';
import SuratPage from './pages/Surat';
import AyatPage from './pages/Ayat';

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
      initialRouteName="Home"
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
      <Drawer.Screen
        name="Surat"
        component={SuratPage}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
        }}
      />
      <Drawer.Screen
        name="Ayat"
        component={AyatPage}
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
