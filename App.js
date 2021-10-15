/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SafeAreaView from 'react-native-safe-area-view';
import UiHome from './container/Home.js';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Button,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  const Profile = ({navigation, route}) => {
    return <Text>This is {route.params.name}'s profile</Text>;
  };
  const [text, setText] = useState('');
  const style = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 8,
      height: 44,
    },
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={UiHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
