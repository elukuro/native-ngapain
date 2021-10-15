import React, {useState, useEffect, useCallback} from 'react';
import API from './../api/index.js';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Button,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';

function Home() {
  const [surahList, setSurahList] = useState();
  const [renderSurah, setRenderSurah] = useState();
  useEffect(() => {
    API.getSurah().then(function (result) {
      setSurahList(result.data);
    });
    API.getDetail({id: '1', ayat: '1'}).then(function (result) {
      setRenderSurah(result);
    });
  }, []);
  const styles = StyleSheet.create({
    baseText: {
      fontFamily: 'fonts',
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

  if (renderSurah) {
    return (
      <ScrollView>
        <View>
          <Text style={styles.baseText}>{renderSurah[0].aya_text}</Text>
        </View>
      </ScrollView>
    );
  } else {
    return <Text>loading...</Text>;
  }
}

export default Home;
