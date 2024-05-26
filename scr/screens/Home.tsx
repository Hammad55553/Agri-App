// Home.tsx

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Table, Row } from 'react-native-table-component';
import { ScrollView } from 'react-native-gesture-handler';

interface HomeRouteParams {
  farmerData?: {
    farmer_name: string;
  };
}

const Home = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedFarmer, setSelectedFarmer] = useState<HomeRouteParams['farmerData']>();
  const [searchQuery, setSearchQuery] = useState('');

  // const date = { year: 'numeric', month: 'long', day: 'numeric' };
  // const currentDate = new Date().toLocaleDateString('en-us', date as never);

    const handleViewDetails = () => {
    if (farmerData) {
      // Navigate to FarmerDetails screen and pass farmerData
      const navigateData = { farmerData };

      // @ts-ignore
      navigation.navigate('FarmerDetails', navigateData);
    }
  };

  const handleAddFarmers = () => {
    navigation.navigate('AddFarmers' as never);
  };

  const { farmerData } = route.params as HomeRouteParams || {};
  const tableData = farmerData
    ? [
      ['Name', farmerData.farmer_name],
    ]
    : [];

  const filteredTableData = tableData.filter(
    (rowData) =>
      rowData[0].toLowerCase().includes(searchQuery.toLowerCase()) ||
      rowData[1].toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View>
      {/* Header */}
      {/* <View style={styles.headercontainer}>
        <Text style={styles.currentDate}>{`Today, ${currentDate}`}</Text>
        <Image source={require('../../assets/pngegg.png')} style={styles.userIcon} />
      </View> */}

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Image source={require('../../assets/search.jpg')} style={{ width: 24, height: 24 }} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Farmer..."
          placeholderTextColor="#808080"
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>

      <ScrollView>
        <View style={styles.parenthadding}>
          <Text style={styles.midtitle}>Farmer details</Text>
        </View>

        {farmerData && (
          <Table borderStyle={styles.border}>
            {filteredTableData.map((rowData, index) => (
              <Row
                key={index}
                data={rowData}
                style={index % 2 === 0 ? styles.head : styles.row}
                textStyle={styles.text}
              />
            ))}

            <TouchableOpacity
              style={styles.viewDetailsButton}
              onPress={handleViewDetails}
            >
              <Text style={styles.viewDetailsText}>View Details</Text>
            </TouchableOpacity>
          </Table>
        )}
      </ScrollView>

      <TouchableOpacity style={styles.addnew} onPress={handleAddFarmers}>
        <View style={styles.inaddnew}>
          <Text style={styles.buttonText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'lightgreen',
    height: 55,
  },
  currentDate: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'space-between',
  },
  userIcon: {
    width: 35,
    height: 35,
  },
  midtitle: {
    paddingLeft: 18,
    flexDirection: 'row',
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 20,
    bottom: '100%',
  },
  addnew: {
    position: 'absolute',
    alignSelf: 'flex-end',
    borderWidth: 0,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginTop: 650, 
    right: 15,
    backgroundColor: 'green',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 40,
  },
  inaddnew: {},
  midText: {
    height: 200,
    paddingLeft: 18,
    color: '#000000',
    fontSize: 18,
    marginTop: 5,
    justifyContent: 'center',
    fontFamily: 'PlayfairDisplay-Italic-VariableFont_wght.ttf',
  },
  parenthadding: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 45,
  },

  // tableContainer: {
  //   margin: 10,
  // },
  // table: {
  //   // borderWidth: 1,
  //   borderColor: '#000000',
  //   borderRadius: 5,
  //   overflow: 'hidden',
  // },
  head: {
    // height: 40,
    backgroundColor: '#f1f8ff',
  },
  row: {
    height: 40,
    backgroundColor: '#ffffff',
  },
  text: {
    margin: 6,
    color: '#000000',
    textAlign: 'center',
    fontSize: 16,
  },
  border: {
    borderWidth: 1,
    borderColor: '#000000',
    flexWrap: 'wrap',

  },
  additionalInfo: {
    paddingLeft: 18,
    color: '#000000',
    fontSize: 16,
    marginTop: 5,
  },

  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: 'grey',
  },
  // neche wala new h data bs
  viewDetailsButton: {
    // borderWidth: 1,
    backgroundColor: '#003966',
    // marginHorizontal: 90,

  },
  viewDetailsText: {
    color: '#fff',
    fontSize: 15,
    alignSelf: 'center',
  },
});



export default Home;
