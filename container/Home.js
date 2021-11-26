import React, {useState, useEffect} from 'react';
import API from './../api/index.js';
import style from './../assets/style';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

function Home({navigation}) {
  const [surahList, setSurahList] = useState();
  useEffect(() => {
    API.getSurah().then(function (result) {
      setSurahList(result.data);
    });
  }, [surahList]);
  const selectSurah = (id, count_ayat) => {
    navigation.navigate('Surat', {id, count_ayat});
  };
  const Item = ({item}) => {
    return (
      <View style={style.item}>
        <TouchableOpacity onPress={() => selectSurah(item.id, item.count_ayat)}>
          <Text style={style.text}>{item.surat_name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  if (surahList) {
    return (
      <SafeAreaView style={style.container}>
        <Text style={style.title}>
          Langkah{' '}
          <Text
            style={{
              backgroundColor: '#f008',
              borderWidth: 1,
              borderColor: '#000',
              borderRadius: 222,
              padding: 20,
            }}>
            1
          </Text>
        </Text>
        <Text style={style.description}>Pilih surat</Text>
        <FlatList
          style={style.flatList}
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
