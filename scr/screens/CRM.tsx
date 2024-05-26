import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView, KeyboardAvoidingView } from 'react-native';

const CRM = () => {
    const navigation = useNavigation();
    const handleCRM = () => {
        navigation.navigate('Home'as never);
      };
      const handleweather =() =>{
        navigation.navigate('weather'as never);
      }
      const handleLocation =() =>{
        navigation.navigate('Location'as never);
      }
    
    return (
        
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.row1}>
                <TouchableOpacity onPress={handleCRM}>
                    <Image
                        source={require('../../assets/crmpic.jpg')}
                        style={styles.headerImage} 
                    />
                    <Text style={styles.text}>CRM Data Collection</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={handleLocation}>
                <View style={styles.row2}>
                    <Image
                        source={require('../../assets/location.jpg')}
                        style={styles.headerImage}
                    />
                    <Text style={styles.text}>Location</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleweather}>
                <View style={styles.row2}>
                    <Image
                        source={require('../../assets/weather.png')}
                        style={styles.headerImage}
                    />
                    <Text style={styles.text}>Weather</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'lightgreen',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row1: {
        marginBottom: 20,
    },
    row2: {
        marginBottom: 20,
        top:10
    },
    headerImage: {
        width: 240, 
        height: 180, 
        resizeMode: 'cover',
        borderTopLeftRadius: 80, 
        borderBottomRightRadius: 80, 
    },
    text: {
        textAlign: 'center',
        borderBottomRightRadius: 180, 
        color:'#581845',
        fontSize: 18,
        fontWeight: 'bold',
        borderBottomWidth:3,
        borderRightWidth:1,

    },


});

export default CRM;
