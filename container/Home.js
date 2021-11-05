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

function Home({navigation}) {
  const [surahList, setSurahList] = useState();
  useEffect(() => {
    API.getSurah().then(function (result) {
      setSurahList(result.data);
    });
  }, [surahList]);
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

  const selectSurah = (id, count_ayat) => {
    navigation.navigate('Surat', {id, count_ayat});
  };
  const Item = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.item}
          onPress={() => selectSurah(item.id, item.count_ayat)}>
          <Text>{item.surat_name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  if (surahList) {
    return (
      <SafeAreaView style={styles.container}>
        {/* <Text>{JSON.stringify(surahList)}</Text> */}
        <FlatList
          data={surahList}
          renderItem={Item}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  } else {
    return <Text>loading...</Text>;
  }
}

export default Home;
