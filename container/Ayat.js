import React, {useState, useEffect, useCallback} from 'react';
import API from './../api/index.js';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  FlatList,
  SafeAreaView,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function Ayat({route, navigation}) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#374151',
      padding: 8,
    },
    baseText: {
      fontFamily: 'fonts',
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    item: {
      padding: 10,
      color: '#fff',
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <Text>{JSON.stringify(route.params)}</Text>
    </SafeAreaView>
  );
}

export default Ayat;
