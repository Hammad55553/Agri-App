// App.tsx

import React from 'react';

import { Text, StyleSheet, Image, View, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const Welcome = () => {
  const navigation = useNavigation();
  const handleStartCollecting = () => {
    navigation.navigate('Login' as never);
  };
  return (

    <View style={styles.container}>
      <Image
        source={require('../../assets/rapeseed.jpg')}
        style={styles.headerImage}
      />
      <Text style={styles.headerText}>Welcome to Agriculture data collector</Text>
      <View style={styles.midContainer}>
        <Text style={styles.midtitle}>Search and Collect</Text>
        <Text style={styles.midText}>
          Easily search for agriculture, {"\n"}add items to your list,{"\n"}and collect data in the field. View{" "}
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleStartCollecting}>
        <Text style={styles.buttonText}>START COLLECTING</Text>
      </TouchableOpacity>
      </View>
      
      
    </View>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
  },
  headerImage: {
    width: '100%',
    height: '50%',
    position: 'relative',
  },
  headerText: {
    textAlign: 'center',
    paddingTop: 6,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    backgroundColor: 'lightgreen',
    width: '100%',
    height: 40,
  },
  midContainer: {
    position:'relative',
    height:300,
    backgroundColor: '#FBFFFE',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 0,
  },
  midtitle: {
    paddingLeft: 18,
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 20,
    marginTop: 45,
  },
  midText: {
    height:200,
    paddingLeft: 18,
    color: '#000000',
    fontSize: 18,
    marginTop: 5,
    justifyContent: 'center',
    // fontFamily: 'PlayfairDisplay-Italic-VariableFont_wght.ttf',

  },
  button: {
    position:'absolute',
    backgroundColor: 'orange',
    paddingHorizontal:20,
    paddingVertical: 15,
    borderRadius: 5,
    bottom: 65,
    alignSelf:'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

});

export default Welcome;
