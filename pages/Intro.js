import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Dimensions,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
export const {width, height} = Dimensions.get('window');

const FirstIntro = () => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.heading}>Assalamuallaikum</Text>
      <Text style={styles.caption}>
        <Text style={styles.textHighlight}>#HapalinYuk</Text> akan membantu kamu
        agar bias menghafal juz 30 dengan lebih mudah, Insya allah
      </Text>
    </View>
  );
};
const SecondIntro = () => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.heading}>Bagaimana memulainya ? </Text>
      <Text style={styles.caption}>
        Agar kamu bisa menghafal dibutuhkan tiga hal penting, yaitu{' '}
        <Text style={styles.textHighlight}>niat yang benar</Text>,{' '}
        <Text style={styles.textHighlight}>konsisten dalam menghafal</Text>{' '}
        serta{' '}
        <Text style={styles.textHighlight}>jangan berhenti sampai selesai</Text>
        . terpenting adalah jangan lupa sertai usaha dengan doa
      </Text>
    </View>
  );
};

const ThirdIntro = navigation => {
  const [name, setName] = useState(null);
  return (
    <View style={styles.textContainer}>
      <Text style={[styles.headingWithoutMarginBottom]}>
        Sudah Siap ? #HapalinYuk
      </Text>
      <View>
        <Text>Masukkan namamu disini:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setName}
          value={name}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MainNavigator')}>
          <Text style={styles.buttonText}>Bismillah</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Intro = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <SwiperFlatList
        showPagination
        paginationStyleItemInactive={{backgroundColor: '#C4C4C4'}}
        paginationStyleItemActive={{backgroundColor: '#3D3D3D'}}>
        <View style={styles.child}>{FirstIntro()}</View>
        <View style={styles.child}>{SecondIntro()}</View>
        <View style={styles.child}>{ThirdIntro(navigation)}</View>
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
  headingWithoutMarginBottom: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Lato-Black',
    color: '#7F7FD5',
    marginBottom: '10%',
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
  textHighlight: {
    color: '#7F7FD5',
    fontWeight: 'bold',
  },
  child: {
    height,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  childLeft: {
    height: height,
    width,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textInput: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#3D3D3D',
    width: '100%',
    marginBottom: '40%',
  },
  button: {
    height: 50,
    borderColor: '#7F7FD5',
    borderWidth: 2,
    borderRadius: 20,
    color: '#7F7FD5',
    backgroundColor: '#fff',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#7F7FD5',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Intro;
