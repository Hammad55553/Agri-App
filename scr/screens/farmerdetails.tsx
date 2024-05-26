import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

type FarmerDetailsRouteParams = {
  FarmerDetails: {
    farmerData: {
      farmer_name: string;
      fatherName: string;
      cnic: string;
      contact_number: string;
      province: string;
      district: string;
      city: string;
      village: string;
      land: string;
      total_cropping_area: string;
      soil_type: string;
      plant_population: string;
      flower_bloom_time: string;
      seed_pods_time: string;
      name_spray: string;
      rate: string;
      sale: string;
      sowing: string;
      pestScouting: string;
      imigation: string;
      fertilizer: string;
      spray: string;
      cottonTimes: string[]; 
      spray1: string;
      pestScoutingInput: string;
      currentLocation: string;
      create_date:string;
    };
  };
};

const FarmerDetails = () => {
  const route = useRoute<RouteProp<FarmerDetailsRouteParams, 'FarmerDetails'>>();
  const { farmerData } = route.params;

  const tableData = [
    { label: 'Name', value: farmerData.farmer_name },
    { label: "Father's Name", value: farmerData.fatherName },
    { label: 'CNIC', value: farmerData.cnic },
    { label: 'Contact No', value: farmerData.contact_number },
    { label: 'Province', value: farmerData.province },
    { label: 'District', value: farmerData.district },
    { label: 'City', value: farmerData.city },
    { label: 'Village', value: farmerData.village },
    { label: 'Village', value: farmerData.village },
    { label: 'Date', value: farmerData.create_date },
    { label: 'Total Land', value: farmerData.land },
    { label: 'Total Cropping Area', value: farmerData.total_cropping_area },
    { label: 'Soil Type', value: farmerData.soil_type },
    { label: 'Sowing time', value: farmerData.sowing },
    { label: 'Plant Population', value: farmerData.plant_population},
    { label: 'Imigation', value: farmerData.imigation },
    { label: 'Fertilizer', value: farmerData.fertilizer },
    { label: 'Spray Pesticide', value: farmerData.spray },
    { label: 'Flower Bloom Time', value: farmerData.flower_bloom_time },
    { label: 'Seed Pods Time', value: farmerData.seed_pods_time },
    { label: 'Name Spray', value: farmerData.name_spray },
    {
      label: 'Yield',
      value: farmerData.cottonTimes.map((time, index) => (
        <Text key={index} style={styles.value}>, {time}</Text>
      )),
    },
    { label: 'Rate', value: farmerData.rate },
    { label: 'Sale', value: farmerData.sale },
    {
      label: 'Pest Scouting',
      value: farmerData.spray1 === 'Other' ? (
        <Text style={styles.value}>{`${farmerData.spray1}: ${farmerData.pestScoutingInput || 'N/A'}`}</Text>
      ) : (
        <Text style={styles.value}>{farmerData.spray1}</Text>
      ),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Farmer Details:</Text>
      <View style={styles.tableContainer}>
        {tableData.map((item, index) => (
          <View key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
            <Text style={styles.label}>{item.label}:</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>{item.value}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.end}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    overflow: 'scroll',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  tableContainer: {
    padding: 10,
    backgroundColor: '#003966',
  },
  evenRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f3f3f3',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  oddRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  label: {
    fontWeight: 'bold',
    color: '#000',
  },
  valueContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  value: {
    color: '#000',
    fontStyle: 'italic',
  },
  end: {
    height: 20,
  },
});

export default FarmerDetails;
