import React, { useEffect, useState } from 'react';
import { View, Text, PermissionsAndroid, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';
import Snackbar from 'react-native-snackbar';
import Spinner from 'react-native-loading-spinner-overlay';
import { openSettings } from 'react-native-permissions';
import { enableLatestRenderer } from 'react-native-maps';

enableLatestRenderer();

interface Location {
  latitude: number | null;
  longitude: number | null;
}

const Location = () => {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<Location>({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'App needs access to your location',
            buttonPositive: 'OK',
          }
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setLoading(true);
          Geolocation.watchPosition(
            position => {
              console.log('Position:', position);
              const { latitude, longitude } = position.coords;
              setLocation({ latitude, longitude });
              setLoading(false);
            },
            error => {
              console.log('Location error:', error);
              handleLocationError(error);
            },
            {
              enableHighAccuracy: true,
              timeout: 30000,
              maximumAge: 60000,
              distanceFilter: 10,
            }
          );
        } else {
          console.log('Location permission denied:', granted);
          showLocationPermissionSnackbar();
        }
      } catch (err) {
        console.warn(err);
      }
    };

    const handleLocationError = (error: any) => {
      if (error.code === 3) {
        console.log('Location request timed out');
        // Handle timeout error, if needed
      } else {
        console.log('Location error:', error.message);
        // Handle other location errors
      }
    };

    const showLocationPermissionSnackbar = () => {
      Snackbar.show({
        text: 'Location permission is required. Please enable it in settings.',
        duration: Snackbar.LENGTH_LONG,
        action: {
          text: 'Open Settings',
          textColor: 'green',
          onPress: () => handleOpenSettings(),
        },
      });
    };

    const handleOpenSettings = () => {
      openSettings().catch(() => console.warn('Cannot open settings'));
    };

    requestLocationPermission();
  }, []);

  return (
    <View style={styles.container}>
      {location.latitude !== null && location.longitude !== null ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Current Location"
          />
        </MapView>
      ) : (
        <Text>Loading...</Text>
      )}
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={styles.spinnerText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  spinnerText: {
    color: '#fff',
  },
});

export default Location;
