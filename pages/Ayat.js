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

  const nextAyat = async payload => {
    if (isChecked) {
      await AsyncStorage.setItem(
        '@LastVisit',
        JSON.stringify({
          suratName: surat,
          ayat: payload.ayat,
          suratId: payload.suratId,
        }),
      ).then(() => {
        navigation.navigate('Ayat', payload);
      });
    }
  };

  useEffect(() => {
    if (isVisible) {
      let {suratName, ...payload} = route.params;
      setAyat(API.getDetail(payload)[0]);
      setSurat(suratName);
      setIsChecked(false);
    }
  }, [isVisible, route.params]);

  useEffect(() => {
    const saveAyat = async () => {
      const {suratId = ayat.sura_id, ayatNumber = ayat.aya_number} = ayat;
      if (!suratId && !ayatNumber) {
        return;
      }
      try {
        const progressData = await AsyncStorage.getItem('@Progress');
        console.log('progressData', progressData);
        let progress = [];
        if (progressData) {
          const progressDataParse = JSON.parse(progressData);
          const findIndex = progressDataParse.findIndex(
            a => a.suratId === suratId,
          );
          console.log('dataParse', progressDataParse);
          if (findIndex !== -1) {
            progressDataParse[findIndex].ayat = [
              ...new Set([...progressDataParse[findIndex].ayat, ayatNumber]),
            ];
            console.log('new progress', progressDataParse);
            progress = progressDataParse;
          } else {
            progress.push({
              suratId,
              ayat: [ayatNumber],
            });
          }
        } else {
          progress.push({
            suratId,
            ayat: [ayatNumber],
          });
        }
        console.log(progress);
        await AsyncStorage.setItem('@Progress', JSON.stringify(progress));
      } catch (e) {
        console.log(e);
      }
    };
    if (isChecked && isVisible) {
      saveAyat();
    }
  }, [isChecked, ayat, isVisible]);

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
        <View style={styles.checkbox}>
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
            nextAyat({
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
  checkbox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default Ayat;
