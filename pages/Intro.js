import React from 'react';
import {SafeAreaView, Text, Dimensions, StyleSheet, View} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
export const {width, height} = Dimensions.get('window');

const firstIntro = () => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.heading}>Assalamuallaikum</Text>
      <Text style={styles.caption}>
        <Text style={{color: '#7F7FD5', fontWeight: 'bold'}}>#NuunProject</Text>{' '}
        akan membantu kamu agar bias menghafal juz 30 dengan lebih mudah, Insya
        allah
      </Text>
    </View>
  );
};
const secondIntro = () => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.heading}>Bagaimana memulainya ? </Text>
      <Text style={styles.caption}>
        Agar kamu bisa menghafal dibutuhkan tiga hal penting, yaitu{' '}
        <Text style={{color: '#7F7FD5', fontWeight: 'bold'}}>
          niat yang benar
        </Text>
        ,{' '}
        <Text style={{color: '#7F7FD5', fontWeight: 'bold'}}>
          konsisten dalam menghafal
        </Text>{' '}
        serta{' '}
        <Text style={{color: '#7F7FD5', fontWeight: 'bold'}}>
          jangan berhenti sampai selesai
        </Text>
        . terpenting adalah jangan lupa sertai usaha dengan doa
      </Text>
    </View>
  );
};
const Intro = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SwiperFlatList
        showPagination
        paginationStyleItemInactive={{backgroundColor: '#C4C4C4'}}
        paginationStyleItemActive={{backgroundColor: '#3D3D3D'}}>
        <View style={styles.child}>{firstIntro()}</View>
        <View style={styles.child}>{secondIntro()}</View>
        <View style={styles.child}>
          <Text>test3</Text>
        </View>
      </SwiperFlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Lato-Black',
    color: '#7F7FD5',
    marginBottom: '30%',
  },
  caption: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 30,
    color: '#555555',
    fontFamily: 'Lato-Medium',
  },
  textContainer: {
    paddingHorizontal: 20,
  },
  child: {
    height,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Intro;
