import React, {useState, useEffect} from 'react';
import API from '../api/index.js';
import {Text, SafeAreaView} from 'react-native';

function Home({navigation}) {
  const [surahList, setSurahList] = useState([]);
  useEffect(() => {
    API.getSurah().then(res => {
      setSurahList(res.data);
    });
  }, []);
  return (
    <SafeAreaView>
      <Text>{JSON.stringify(surahList[0].surat_text)}</Text>
    </SafeAreaView>
  );
}

export default Home;
