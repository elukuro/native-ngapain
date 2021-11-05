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

function Surat({route, navigation}) {
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
  const selectAyat = ayat => {
    navigation.navigate('Ayat', {ayat: ayat, suratId: route.params.id});
  };
  const Item = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.item}
          onPress={() => selectAyat(item + 1)}>
          <Text>Ayat {item + 1}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const count = () => {
    let ayat = [];
    for (let i = 0; i < route.params.count_ayat; i++) {
      ayat.push(i);
    }
    return ayat;
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={count()} renderItem={Item} keyExtractor={item => item} />
    </SafeAreaView>
  );
}

export default Surat;
