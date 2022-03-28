import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';

const Spacer = ({children}) => {
  return <View style={styles.spacer}>{children}</View>;
};

const Main = ({route, navigation}) => {
  const [user, setUser] = useState(null);
  const [sinceDay, setSinceDay] = useState(null);
  const [lastVisit, setLastVisit] = useState(null);
  const isVisible = useIsFocused();
  const initData = async () => {
    const userData = await AsyncStorage.getItem('@User');
    const lastVisitData = await AsyncStorage.getItem('@LastVisit');
    const currentTime = new Date().getTime();
    const oneDayInMiliseconds = 24 * 60 * 60 * 1000;
    const dayCount = Math.floor(
      (currentTime - JSON.parse(userData).time) / oneDayInMiliseconds,
    );
    setUser(JSON.parse(userData));
    setSinceDay(dayCount);
    setLastVisit(JSON.parse(lastVisitData));
  };
  useEffect(() => {
    if (isVisible) {
      initData();
    }
  }, [isVisible]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.greeting}>
        <Text style={[styles.text]}>Assalamuallaikum</Text>
        <Text style={[styles.heading, styles.textPurple]}>
          {user ? user.name : '-'}
        </Text>
        <Text style={styles.caption}>
          Kamu telah menjalankan{' '}
          <Text style={[styles.textPurple, styles.textBold]}>#HafalinYuk</Text>{' '}
          selama
          <Text style={styles.textBold}> {user ? sinceDay : '-'} </Text>
          hari
        </Text>
      </View>
      <View style={styles.firstCardWrapper}>
        <View style={[styles.card, styles.cardHorizontal]}>
          <Progress.Circle
            progress={0.3}
            size={100}
            showsText={true}
            thickness={10}
            color={'#7F7FD5'}
            borderWidth={0}
          />
          <Text style={[styles.textBold, styles.textNormal, styles.textBlack]}>
            Overall
          </Text>
        </View>
        <View style={[styles.card, styles.cardLeft, styles.cardHorizontal]}>
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
              {lastVisit ? lastVisit.suratName : '-'}
            </Text>
          </Spacer>
          <Spacer>
            <Text style={[styles.textThin, styles.textBlack, styles.textSmall]}>
              Ayat
            </Text>
            <Text style={[styles.textBig, styles.textBlack, styles.textBold]}>
              {lastVisit ? lastVisit.ayat : '-'}
            </Text>
          </Spacer>
        </View>
      </View>
      <View style={[styles.secondCardWrapper]}>
        <View style={[styles.card, styles.cardLeft, {marginBottom: 15}]}>
          <Spacer>
            <Text
              style={[styles.textBlack, styles.textNormal, styles.textBold]}>
              Surat
            </Text>
          </Spacer>
          <View style={[styles.progressBar]}>
            <Progress.Bar
              progress={0.7}
              width={null}
              color={'#85D5EE'}
              unfilledColor="#E6E6E6"
              height={10}
              borderWidth={0}
            />
            <Spacer>
              <Text
                style={[
                  styles.textSmall,
                  styles.textThin,
                  {textAlign: 'right', marginTop: 5},
                ]}>
                20/35
              </Text>
            </Spacer>
          </View>
        </View>
        <View style={[styles.card, styles.cardLeft]}>
          <Spacer>
            <Text
              style={[styles.textBlack, styles.textNormal, styles.textBold]}>
              Ayat
            </Text>
          </Spacer>
          <View style={[styles.progressBar]}>
            <Progress.Bar
              progress={0.2}
              width={null}
              color={'#EE8585'}
              unfilledColor="#E6E6E6"
              height={10}
              borderWidth={0}
            />
            <Text
              style={[
                styles.textSmall,
                styles.textThin,
                {textAlign: 'right', marginTop: 5},
              ]}>
              20/35
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.buttonContainer]}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => {
            if (lastVisit) {
              navigation.navigate('Ayat', lastVisit);
            } else {
              navigation.openDrawer();
            }
          }}>
          <Text style={[styles.textPurple, styles.textBold]}>Mulai</Text>
        </TouchableOpacity>
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
  firstCardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 80,
    zIndex: 1,
  },
  secondCardWrapper: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    zIndex: 1,
    paddingHorizontal: 30,
  },
  progressBar: {
    width: '100%',
  },
  card: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 20,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  cardHorizontal: {
    width: '48%',
    height: 140,
  },
  cardLeft: {
    alignItems: 'flex-start',
  },
  buttonContainer: {
    marginTop: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  button: {
    position: 'relative',
    borderRadius: 20,
    backgroundColor: '#fff',
    color: '#7F7FD5',
    height: 50,
    width: 200,
    borderWidth: 2,
    borderColor: '#7F7FD5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Main;
