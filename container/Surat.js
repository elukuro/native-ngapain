import React from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

function Surat({route, navigation}) {
  const selectAyat = ayat => {
    navigation.navigate('Ayat', {ayat: ayat, suratId: route.params.id});
  };
  const Item = ({item}) => {
    return (
      <View>
        <TouchableOpacity onPress={() => selectAyat(item + 1)}>
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
    <SafeAreaView>
      <FlatList data={count()} renderItem={Item} keyExtractor={item => item} />
    </SafeAreaView>
  );
}

export default Surat;
