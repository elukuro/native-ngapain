'use strict';
import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontFamily: 'Lato-Bold',
    color: '#e4e7eb',
    marginTop: 100,
    marginBottom: 90,
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    color: '#e4e7eb',
    fontFamily: 'Lato-Light',
    marginBottom: 50,
  },
  flatList: {
    width: '90%',
    height: 300,
    maxHeight: 300,
  },
  item: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
  },
  text: {
    color: '#e4e7eb',
    fontFamily: 'Lato-regular',
    fontSize: 14,
  },
});
