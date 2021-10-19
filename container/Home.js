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

function Home() {
  const [surahList, setSurahList] = useState();
  const [selectedSurah, setSelectedSurah] = useState();
  useEffect(() => {
    API.getSurah().then(function (result) {
      setSurahList(result.data);
    });
  }, []);
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

  const selectSurah = id => {
    setSelectedSurah(id);
  };
  const Item = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.item}
          onPress={() => selectSurah(item.id)}>
          <Text>{item.surat_name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  if (surahList) {
    return (
      <SafeAreaView style={styles.container}>
        {/* <Text>{JSON.stringify(surahList)}</Text> */}
        <Text>{selectedSurah}</Text>
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
