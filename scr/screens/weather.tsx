import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';

const PestPredictionCenter = () => {
    const [maxTemp, setMaxTemp] = useState<string>('');
    const [minTemp, setMinTemp] = useState<string>('');
    const [meanTemp, setMeanTemp] = useState<string>('');
    const [relativeHumidity, setRelativeHumidity] = useState<string>('');
    const [rainfall, setRainfall] = useState<string>('');
    const [gddPwb, setGddPwb] = useState<string>('');

    const [maxTempError, setMaxTempError] = useState<boolean>(false);
    const [minTempError, setMinTempError] = useState<boolean>(false);
    const [meanTempError, setMeanTempError] = useState<boolean>(false);
    const [relativeHumidityError, setRelativeHumidityError] = useState<boolean>(false);
    const [rainfallError, setRainfallError] = useState<boolean>(false);
    const [gddPwbError, setGddPwbError] = useState<boolean>(false);

    const validateAndSetField = (fieldName: string, text: string) => {
        let value = parseFloat(text);

        if (isNaN(value) || value < -100 || value > 100) {
            // Alert.alert('Error', `Please enter a valid number between -100 and 100 for ${fieldName}.`);

            // Set the corresponding error state to true
            switch (fieldName) {
                case 'maxTemp':
                    setMaxTempError(true);
                    break;
                case 'minTemp':
                    setMinTempError(true);
                    break;
                case 'meanTemp':
                    setMeanTempError(true);
                    break;
                case 'relativeHumidity':
                    setRelativeHumidityError(true);
                    break;
                case 'rainfall':
                    setRainfallError(true);
                    break;
                case 'gddPwb':
                    setGddPwbError(true);
                    break;
                default:
                    break;
            }

            return;
        }

        // Reset the corresponding error state to false
        switch (fieldName) {
            case 'maxTemp':
                setMaxTempError(false);
                setMaxTemp(value.toString());
                break;
            case 'minTemp':
                setMinTempError(false);
                setMinTemp(value.toString());
                break;
            case 'meanTemp':
                setMeanTempError(false);
                setMeanTemp(value.toString());
                break;
            case 'relativeHumidity':
                setRelativeHumidityError(false);
                setRelativeHumidity(value.toString());
                break;
            case 'rainfall':
                setRainfallError(false);
                setRainfall(value.toString());
                break;
            case 'gddPwb':
                setGddPwbError(false);
                setGddPwb(value.toString());
                break;
            default:
                break;
        }
    };

    const handlePredict = () => {
        if (!maxTemp || !minTemp || !meanTemp || !relativeHumidity || !rainfall|| !gddPwb) {
            Alert.alert('Error', 'Something is wrong, please check');
            return;
        }
        // Assuming successful prediction, navigate to the CRM screen
        // navigation.navigate('CRM');
        Alert.alert('Successful', 'Assuming Prediction Added');
    };

    const handleClear = () => {
        setMaxTemp('');
        setMinTemp('');
        setMeanTemp('');
        setRelativeHumidity('');
        setRainfall('');
        setGddPwb('');

        // Reset all error states
        setMaxTempError(false);
        setMinTempError(false);
        setMeanTempError(false);
        setRelativeHumidityError(false);
        setRainfallError(false);
        setGddPwbError(false);
    };

    const renderInputField = (label: string, value: string, setValue: (text: string) => void, fieldName: string, hasError: boolean) => {
        const handleInputChange = (text: string) => {
            // Remove non-numeric, non-decimal point, and non-minus sign characters
            const numericText = text.replace(/[^0-9.-]/g, '');

            // Ensure the numeric value is within the desired range
            const numericValue = parseFloat(numericText);
            if (!isNaN(numericValue) && numericValue >= -100 && numericValue <= 100) {
                setValue(numericText);
            } else {
                // If the value is outside the range, keep only the last character
                setValue(numericText.slice(-1));
            }
        };

        return (
            <View>
                <Text style={styles.heading}>{label}:</Text>
                <TextInput
                    style={[styles.input, hasError && styles.invalidInput]}
                    placeholder={`Enter ${label}`}
                    value={value}
                    onChangeText={handleInputChange}  // Using the handleInputChange function
                    onEndEditing={e => validateAndSetField(fieldName, e.nativeEvent.text)}
                    placeholderTextColor="grey"
                    keyboardType="numeric"
                />
                {hasError && <Text style={styles.validationMessage}>Only enter values between -100 and 100.</Text>}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Pinkball Worm Attack Predictor</Text>

                {renderInputField('Max Temperature', maxTemp, setMaxTemp, 'maxTemp', maxTempError)}
                {renderInputField('Min Temperature', minTemp, setMinTemp, 'minTemp', minTempError)}
                {renderInputField('Mean Temperature', meanTemp, setMeanTemp, 'meanTemp', meanTempError)}
                {renderInputField('Relative Humidity', relativeHumidity, setRelativeHumidity, 'relativeHumidity', relativeHumidityError)}
                {renderInputField('Rainfall', rainfall, setRainfall, 'rainfall', rainfallError)}
                {renderInputField('GDD PWB', gddPwb, setGddPwb, 'gddPwb', gddPwbError)}

                <TouchableOpacity
                    style={styles.predictButton}
                    onPress={handlePredict}
                >
                    <Text style={styles.predictText}>Predict</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.clearButton}
                    onPress={handleClear}
                >
                    <Text style={styles.clearText}>Clear</Text>
                </TouchableOpacity>

                <Text style={styles.footer}>
                    {/* ... (footer text) */}
                </Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 24,
        marginTop: 24,
        color: 'green',
        paddingHorizontal: 32,
    },
    heading: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 4,
        color: 'green',
        paddingHorizontal: 32,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        color: '#000',
        borderRadius: 5,
        marginHorizontal: 32,
    },
    invalidInput: {
        borderColor: 'red',  // Border color turns red for fields with errors
    },
    predictButton: {
        top: 20,
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 32,
    },
    predictText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    clearButton: {
        top: 35,
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 32
    },
    clearText: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footer: {
        fontSize: 15,
        height: 40,
        textAlign: 'center',
        marginTop: 24,
        marginHorizontal: 0,
        paddingTop: 10,
        color: '#fff'
    },
    validationMessage: {
        color: 'red',
        fontSize: 14,
        paddingHorizontal: 32,
    },
});

export default PestPredictionCenter;
