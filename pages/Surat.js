import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
const Surat = ({route}) => {
  const surah = route.params.surah;

  const AyatItem = ayat => {
    return (
      <TouchableOpacity style={styles.ayatItem} key={ayat}>
        <View>
          <Text>{ayat}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderAyatItem = () => {
    let counter = [];
    for (let i = 1; i <= surah.count_ayat; i++) {
      counter.push(AyatItem(i));
    }
    return counter;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.spacer]}>
        <Text style={[styles.textBig, styles.text]}>Surat:</Text>
        <Text style={[styles.textLarge, styles.textPurple, styles.textBold]}>
          {surah.surat_name}
        </Text>
        <Text
          style={[
            styles.text,
            styles.textThin,
            styles.textNormal,
            styles.textBlack,
          ]}>
          {surah.surat_terjemahan} | {surah.count_ayat} ayat
        </Text>
      </View>
      <View style={[styles.spacer]}>
        <Text style={[styles.textBig, styles.text]}>Ayat:</Text>
        <View style={[styles.ayatList]}>{renderAyatItem()}</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  spacer: {
    paddingHorizontal: 15,
    marginTop: '10%',
  },
  ayatList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '5%',
  },
  ayatItem: {
    color: '#3D3D3D',
    width: 30,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E6E6E6',
    marginRight: 10,
    marginBottom: 10,
  },
  text: {
    fontWeight: '600',
    fontSize: 18,
    color: '#9F9FA1',
  },
  textPurple: {
    color: '#7F7FD5',
  },
  textBlack: {
    color: '#3D3D3D',
  },
  textThin: {
    fontWeight: '300',
  },
  textSmall: {
    fontSize: 10,
  },
  textNormal: {
    fontSize: 14,
  },
  textBig: {
    fontSize: 18,
  },
  textLarge: {
    fontSize: 36,
  },
  textBold: {
    fontWeight: 'bold',
  },
});

export default Surat;
