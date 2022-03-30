import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useIsFocused} from '@react-navigation/native';

import API from './../api/index';

const Ayat = ({route, navigation}) => {
  const [ayat, setAyat] = useState([]);
  const [surat, setSurat] = useState('');
  const [show, setShow] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const isVisible = useIsFocused();

  const toggleShowStyle = () => {
    if (show) {
      return {
        color: '#000',
      };
    }
    return {
      color: '#fff',
    };
  };

  const saveAyat = async payload => {
    if (isChecked) {
      try {
        await AsyncStorage.setItem('@LastVisit', JSON.stringify(payload));
        navigation.navigate('Ayat', payload);
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    console.log('visible', isVisible);
    if (isVisible) {
      let {suratName, ...payload} = route.params;
      setAyat(API.getDetail(payload)[0]);
      setSurat(suratName);
      setIsChecked(false);
    }
  }, [isVisible, route.params]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.spacer}>
        <Text style={[styles.textBig, styles.text]}>Surat:</Text>
        <Text style={[styles.textLarge, styles.textPurple, styles.textBold]}>
          {surat}
        </Text>
        <Text
          style={[
            styles.text,
            styles.textBlack,
            styles.textThin,
            styles.textNormal,
          ]}>
          Ayat: {ayat.aya_number}
        </Text>
      </View>
      <View style={[styles.largeVerticalSpacer, styles.spacer]}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <BouncyCheckbox
            style={{marginRight: 16}}
            size={30}
            fillColor="green"
            unfillColor="#FFFFFF"
            iconStyle={{borderColor: 'green'}}
            disableBuiltInState
            isChecked={isChecked}
            onPress={() => {
              setIsChecked(!isChecked);
            }}
          />
          <Text
            style={[
              styles.textLarge,
              styles.textBlack,
              styles.textArab,
              toggleShowStyle(),
            ]}>
            {ayat.aya_text}
          </Text>
        </View>

        <Text style={[styles.textRight, styles.textNormal, {marginTop: 20}]}>
          {ayat.translation_aya_text}
        </Text>
      </View>
      <View style={[styles.buttonContainer, styles.spacer]}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => setShow(!show)}>
          <Text style={[styles.textPurple, styles.textBold]}>
            {show ? 'Hide' : 'Show'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            styles.buttonCircle,
            isChecked ? {} : styles.buttonDisabled,
          ]}
          onPress={() =>
            saveAyat({
              suratId: ayat.sura_id,
              suratName: surat,
              ayat: ayat.aya_number + 1,
            })
          }>
          <Text style={[styles.textBold, styles.textWhite]}>
            Ayat selanjutnya
          </Text>
        </TouchableOpacity>
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
  },
  largeVerticalSpacer: {
    paddingVertical: '30%',
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
  textWhite: {
    color: '#fff',
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
  textArab: {
    fontFamily: 'fonts',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
  buttonContainer: {
    display: 'flex',
    position: 'absolute',
    bottom: 50,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonCircle: {
    width: '49%',
    backgroundColor: '#7F7FD5',
    color: '#fff',
  },
  buttonDisabled: {
    backgroundColor: '#9F9FA1',
    borderWidth: 0,
  },
  button: {
    borderRadius: 20,
    backgroundColor: '#fff',
    color: '#7F7FD5',
    height: 50,
    width: '49%',
    borderWidth: 2,
    borderColor: '#7F7FD5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Ayat;
