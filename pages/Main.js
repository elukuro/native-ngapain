import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

const Spacer = ({children}) => {
  return <View style={styles.spacer}>{children}</View>;
};

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.greeting}>
        <Text style={[styles.text]}>Assalamuallaikum</Text>
        <Text style={[styles.heading, styles.textPurple]}>Heru Hartanto</Text>
        <Text style={styles.caption}>
          Kamu telah menjalankan{' '}
          <Text style={[styles.textPurple, styles.textBold]}>#HafalinYuk</Text>{' '}
          selama
          <Text style={styles.textBold}>13</Text> hari
        </Text>
      </View>
      <View style={styles.horizontalCardWrapper}>
        <View style={[styles.card]}>
          <Text>Overall</Text>
        </View>
        <View style={[styles.card, styles.cardLeft]}>
          <Text
            style={[
              styles.textBlack,
              styles.textBold,
              styles.textNormal,
              {marginBottom: 4},
            ]}>
            Terakhir baca
          </Text>
          <Spacer>
            <Text style={[styles.textThin, styles.textBlack, styles.textSmall]}>
              Surat
            </Text>
            <Text style={[styles.textBig, styles.textBlack, styles.textBold]}>
              An-Nas
            </Text>
          </Spacer>
          <Spacer>
            <Text style={[styles.textThin, styles.textBlack, styles.textSmall]}>
              Ayat
            </Text>
            <Text style={[styles.textBig, styles.textBlack, styles.textBold]}>
              34
            </Text>
          </Spacer>
        </View>
      </View>
      <ImageBackground
        resizeMode="cover"
        source={require('./../assets/images/gradient-background-big.png')}
        style={styles.backgroundImage}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  spacer: {
    paddingBottom: 5,
  },
  backgroundImage: {
    position: 'absolute',
    bottom: 0,
    height: 450,
    width: '100%',
  },
  greeting: {
    paddingHorizontal: 15,
    marginTop: '10%',
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
  textBold: {
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 36,
    fontWeight: '600',
    marginBottom: '5%',
    fontFamily: 'Lato-Black',
  },
  caption: {
    fontSize: 12,
    fontWeight: '300',
    color: '#000',
  },
  horizontalCardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 80,
    zIndex: 1,
  },
  card: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 20,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    height: 140,
    padding: 20,
  },
  cardLeft: {
    alignItems: 'flex-start',
  },
});

export default Main;
