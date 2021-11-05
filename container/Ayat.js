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
      padding: 20,
    },
    baseText: {
      fontFamily: 'fonts',
    },
    titleText: {
      fontSize: 24,
      fontWeight: 'normal',
      fontFamily: 'fonts',
      color: '#fafafa',
    },
  });
  const [ayat, setAyat] = useState('');
  useEffect(() => {
    API.getDetail(route.params).then(function (result) {
      setAyat(result);
    });
  }, [route.params]);
  if (ayat) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.titleText}>{ayat[0].aya_text}</Text>
        <Text style={styles.baseText}>
          {ayat[0].translation_aya_text.replace(/<\/?[^>]+(>|$)/g, '')}
        </Text>
      </SafeAreaView>
    );
  } else {
    return <Text>loading...</Text>;
  }
}

export default Ayat;
