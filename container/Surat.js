import React from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import style from './../assets/style';

function Surat({route, navigation}) {
  const selectAyat = ayat => {
    navigation.navigate('Ayat', {ayat: ayat, suratId: route.params.id});
  };
  const Item = ({item}) => {
    return (
      <View style={style.item}>
        <TouchableOpacity onPress={() => selectAyat(item + 1)}>
          <Text style={style.text}>Ayat {item + 1}</Text>
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
    <SafeAreaView style={style.container}>
      <Text style={style.title}>
        Langkah <Text>2</Text>
      </Text>
      <Text style={style.description}>Pilih Ayat</Text>
      <FlatList
        style={style.flatList}
        data={count()}
        renderItem={Item}
        keyExtractor={item => item}
      />
    </SafeAreaView>
  );
}

export default Surat;
