import React, {useEffect} from 'react';
import {Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  useEffect(() => {
    const milliseconds = 5000;
    setTimeout(async () => {
      AsyncStorage.clear();
      const asyncName = await AsyncStorage.getItem('@User');
      if (asyncName) {
        navigation.navigate('MainNavigator');
      } else {
        navigation.navigate('Intro');
      }
    }, milliseconds);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>#HapalinYuk!</Text>
      <Image
        style={styles.image}
        source={require('./../assets/images/logo.png')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#7F7FD5',
  },
  text: {
    fontFamily: 'Lato-Bold',
    color: '#fff',
    fontSize: 24,
    marginTop: '80%',
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
});

export default Splash;
