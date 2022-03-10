import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ImageBackground
        resizeMode="cover"
        source={require('./../assets/images/gradient-background.png')}
        style={styles.backgroundImage}> */}
      <View style={styles.greeting}>
        <Text style={styles.text}>Assalamuallaikum</Text>
        <Text style={styles.heading}>Heru Hartanto</Text>
        <Text style={styles.caption}>
          Kamu telah menjalankan #HafalinYuk selama 13 hari
        </Text>
      </View>
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 400,
    marginTop: '90%',
  },
  greeting: {
    paddingTop: '10%',
    paddingHorizontal: 15,
  },
  text: {
    fontWeight: '600',
    fontSize: 18,
    color: '#9F9FA1',
  },
  heading: {
    fontSize: 36,
    fontWeight: '600',
    marginBottom: '5%',
    color: '#7F7FD5',
    fontFamily: 'Lato-Black',
  },
  caption: {
    fontSize: 12,
    fontWeight: '300',
    color: '#000',
  },
});

export default Main;
