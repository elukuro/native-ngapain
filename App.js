/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SafeAreaView from 'react-native-safe-area-view';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Button,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#555' : '#fafafa',
  };

  const Cat = props => {
    const catImage = props.name === 'nero' ? 'p_cat2.png' : 'p_cat1.png';
    const [isHungry, setIsHungry] = useState(true);
    return (
      <View>
        <TouchableWithoutFeedback onPress={() => setIsHungry(!isHungry)}>
          <Image
            source={{uri: `https://reactnative.dev/docs/assets/${catImage}`}}
            style={{
              width: 'auto',
              height: 300,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </TouchableWithoutFeedback>
        <Button
          onPress={() => {
            setIsHungry(!isHungry);
          }}
          title="this is button"
        />
        <Text>cat name is {isHungry ? 'Iam so hungry' : 'Iam not hungry'}</Text>
      </View>
    );
  };
  const Profile = ({navigation, route}) => {
    return <Text>This is {route.params.name}'s profile</Text>;
  };
  const Home = ({navigation}) => {
    return (
      <ScrollView>
        <View>
          <Button
            title="Go to Jane's profile"
            onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
          />
          <Text>some text here</Text>
          <View>
            <Text>Some more text</Text>
          </View>
        </View>
        <Cat name="nero" />
        <Cat name="toru" />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          defaultValue=""
          placeholder="type here to translate"
          onChangeText={text => setText(text)}
        />
        <Text>{text}</Text>
        <View style={style.container}>
          <FlatList
            data={[
              {key: 'Devin'},
              {key: 'Booker'},
              {key: 'Lamelo'},
              {key: 'Ball'},
              {key: 'Deangello'},
              {key: 'russel'},
              {key: 'wesbrok'},
            ]}
            renderItem={({item}) => <Text style={style.item}>{item.key}</Text>}
          />
        </View>
      </ScrollView>
    );
  };
  const HomeScreen = ({navigation}) => {
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      />
    );
  };

  const [text, setText] = useState('');
  const style = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 8,
      height: 44,
    },
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
