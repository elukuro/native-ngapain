import React from 'react';
import type {Node} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UiHome from './container/Home.js';
import UiSurat from './container/Surat.js';
import UiAyat from './container/Ayat.js';

const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#374151',
    text: '#fff',
  },
};

const App: () => Node = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={UiHome} />
        <Stack.Screen name="Surat" component={UiSurat} />
        <Stack.Screen name="Ayat" component={UiAyat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
