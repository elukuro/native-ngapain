import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  //DrawerItemList,
  // DrawerItem,
} from '@react-navigation/drawer';

import API from './../api/index';

const CustomDrawer = props => {
  const [surahList, setSurahList] = useState([]);

  useEffect(() => {
    setSurahList(API.getSurah().data);
  }, []);

  const renderDrawerItem = ({navigation}) => {
    return surahList.map((surah, index) => {
      return (
        <View key={index}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Surat', {surah})}
            style={[styles.drawerItemContainer]}>
            <Text
              style={[styles.textBold, styles.colorBlack, styles.textNormal]}>
              {surah.surat_name}
            </Text>
          </TouchableOpacity>
        </View>
      );
    });
  };

  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      {/* <DrawerItem label="Help" onPress={() => alert('Link to help')} /> */}
      <View style={[styles.drawerContainer]}>
        <Text
          style={[
            styles.textBold,
            styles.colorGray,
            styles.textBig,
            {marginBottom: 20},
          ]}>
          Pilih Surat
        </Text>
        {renderDrawerItem({...props})}
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  textBold: {
    fontFamily: 'Lato-Bold',
    fontWeight: 'bold',
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
  colorGray: {
    color: '#9F9FA1',
  },
  colorBlack: {
    color: '#3D3D3D',
  },
  drawerItemContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#9F9FA1',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    marginTop: 10,
    height: 50,
    padding: 10,
  },
});

export default CustomDrawer;
