import React, {useState, useEffect} from 'react';
import API from './../api/index.js';

import {Text, SafeAreaView} from 'react-native';

function Ayat({route, navigation}) {
  const [ayat, setAyat] = useState('');
  useEffect(() => {
    API.getDetail(route.params).then(function (result) {
      setAyat(result);
    });
  }, [route.params]);
  if (ayat) {
    return (
      <SafeAreaView>
        <Text>{ayat[0].aya_text}</Text>
        <Text>
          {ayat[0].translation_aya_text.replace(/<\/?[^>]+(>|$)/g, '')}
        </Text>
      </SafeAreaView>
    );
  } else {
    return <Text>loading...</Text>;
  }
}

export default Ayat;
