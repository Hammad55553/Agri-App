// AddFarmerScreen.tsx

import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


const AddFarmerScreen = () => {
  const navigation = useNavigation();
  const [missingFields, setMissingFields] = useState<string[]>([]);

  ///////////////////////////////////////////Cotton time data ////////////////////////////////////////
  const [cottonTimes, setCottonTimes] = useState<string[]>(['']);


  const handleAddCottonTime = () => {
    // Add an empty string to the floweringTimes array
    setCottonTimes([...cottonTimes, '']);
  };
  const handleDeleteFloweringTime = (index: number) => {
    const updatedFloweringTimes = [...cottonTimes];
    updatedFloweringTimes.splice(index, 1);
    setCottonTimes(updatedFloweringTimes);
  };

  const renderCottonTimeInputs = () => {
    return cottonTimes.map((value, index) => (
      <View key={index}>
        <Text style={styles.inlabel}>Cotton Time # {index + 1}</Text>
        <TextInput
          style={styles.input}
          value={value}
          data-name="cottontimes"
          onChangeText={(text) => {
            const updatedCottonTimes = [...cottonTimes];
            updatedCottonTimes[index] = text;
            setCottonTimes(updatedCottonTimes);

          }}
          placeholder="Enter Cotton Quantity"
          placeholderTextColor="grey"

        />
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeleteFloweringTime(index)}>
          <Text style={styles.deleteButtonText}>❌</Text>
        </TouchableOpacity>
      </View>
    ))
  };
  ///////////////////////////////////////////personal data ////////////////////////////////////////
  const [farmer_name, setName] = useState('');
  const [father_name, setFatherName] = useState('');
  const [cnic, setCNIC] = useState('');
  const [contact_number, setContact] = useState('');
  const [province, setProvince] = useState<string>('Punjab');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [village, setVillage] = useState('');
  ///////////////////////////////////////////Province data //////////////////////////////////////
  const [open, setOpen] = useState(false);
  const [provinceitems, setItems] = useState([
    { label: 'Punjab', value: 'Punjab' },
    { label: 'Sindh', value: 'Sindh' },
    { label: 'Balochistan', value: 'Balochistan' },
    { label: 'Khyber Pakhtunkhwa', value: 'Khyber Pakhtunkhwa' },
    { label: 'Azad Jammu and Kashmir', value: 'Azad Jammu and Kashmir' },
  ]);

  ///////////////////////////////////////////Soil data & Additonal (Land)(Plant)(Swoing)(cropping)(name Spray)(Flowring fb & Sp) //////////////////////////////////////
  const [total_land, setLand] = useState('');
  const [plant_population, setPlant] = useState('');
  const [sowing, setSowing] = useState('');
  const [total_cropping_area, setCroppingarea] = useState('');
  const [flower_bloom_time, setFbplant] = useState('');
  const [name_spray, setNspray] = useState('');
  const [seed_pods_time, setSpplant] = useState('');
  const [rate, setRate] = useState('');
  const [sale, setSale] = useState('');
  ///////////////////////////////////////////Soil data & Additonal //////////////////////////////////////
  const [soil_type, setSoil] = useState<string>('');
  const [openSoil, setOpenSoil] = useState(false);
  const [soilitems, setSoiltypes] = useState([
    { label: 'Sandy Soil', value: 'Sandy Soil' },
    { label: 'Clay Soil', value: 'Clay Soil' },
    { label: 'Silt Soil', value: 'Silt Soil' },
    { label: 'Loamy Soil', value: 'Loamy Soil' },
    { label: 'Peaty Soil', value: 'Peaty Soil' },
    { label: 'Chalky Soil', value: 'Chalky Soil' },
    { label: 'Saline Soil', value: 'Saline Soil' },
    { label: 'Volcanic Soil', value: 'Volcanic Soil' },
    { label: 'Laterite Soil', value: 'Laterite Soil' },
  ]);
  ///////////////////////////////////////////Imigation data //////////////////////////////////////

  const [imigation, setImigation] = useState<string>('');
  const [openImigation, setOpenimigation] = useState(false);
  const [imigationitems, setImigationtypes] = useState([
    { label: 'Canal', value: 'Canal' },
    { label: 'Tubewell', value: 'Tubewell' },
    { label: 'Tubewell & Canal', value: 'Tubewell & Canal' },
  ]);
  ///////////////////////////////////////////Fertilizer data //////////////////////////////////////

  const [fertilizer, setFertilizer] = useState<string>('');
  const [openFertilizer, setOpenfertilizer] = useState(false);
  const [fertilizeritems, setFertilizertypes] = useState([
    { label: 'Phosphorus', value: 'Phosphorus' },
    { label: 'Nitrogen', value: 'Nitrogen' },
    { label: 'Potassiuam', value: 'Ptassiuam' },
  ]);
  ///////////////////////////////////////////Spray data //////////////////////////////////////
  const [spray, setSpray] = useState<string>('');
  const [openSpray, setOpenspray] = useState(false);
  const [sprayitems, setSpraytypes] = useState([
    { label: 'Whitefly', value: 'Whitefly' },
    { label: 'Thrips', value: 'Thrips' },
    { label: 'Mites', value: 'Mites' },
    { label: 'PBW', value: 'PBW' },
    { label: 'Army Worm', value: 'Army Worm' },
    { label: 'Milly Bug', value: 'Milly Bug' },
  ]);
  ///////////////////////////////////////////Spray1 data //////////////////////////////////////
  const [spray1, setSpray1] = useState<string | null>('');
  const [openSpray1, setOpenspray1] = useState(false);
  const [pestScoutingInput, setPestScoutingInput] = useState('');
  const [isPestScoutingOther, setIsPestScoutingOther] = useState(false);
  const [pestScoutingInputValue, setPestScoutingInputValue] = useState<string>('');

  const handlePestScoutingInputChange = (value: string | null) => {
    if (value !== null && value !== undefined) {
      setSpray1(value);
      setPestScoutingInputValue(value === 'Other' ? pestScoutingInput : '');
      setIsPestScoutingOther(value === 'Other');
    }
  };


  const handleSetSpray1Value: React.Dispatch<React.SetStateAction<string | null>> = (value) => {
    if (typeof value === 'function') {
      // If the value is a function, use it to update the state
      setSpray1((prevValue) => value(prevValue));
    } else {
      // Otherwise, directly set the value
      handlePestScoutingInputChange(value);
    }
  };

  const [spray1items, setSpray1types] = useState([
    { label: 'Whitefly', value: 'Whitefly' },
    { label: 'Thrips', value: 'Thrips' },
    { label: 'Mites', value: 'Mites' },
    { label: 'PBW', value: 'PBW' },
    { label: 'Army Worm', value: 'Army Worm' },
    { label: 'Jassid', value: 'Jassid' },
    { label: 'Other', value: 'Other' },
  ]);

  const handlecnic = (text: string) => {
    const numericText = text.replace(/[^0-9]/g, '');
    // Limit the length to 13 characters
    const limitedText = numericText.slice(0, 13);
    setCNIC(limitedText);
  };

  const handlecontact = (text: string) => {
    const numericText = text.replace(/[^0-9]/g, '');
    // Limit the length to 11 characters
    const limitedText = numericText.slice(0, 11);
    setContact(limitedText);
  };
  //////////////////////////////////////////////missing fields//////////////////////////////////
  const handleAdd = async () => {
    const missingFields: string[] = [];
    if (!farmer_name) missingFields.push('Farmer\'s Name');
    if (!father_name) missingFields.push('Father\'s Name');
    if (!province) missingFields.push('Province');
    if (!district) missingFields.push('District');
    if (!city) missingFields.push('City');
    if (!contact_number) missingFields.push('Contact No.');
    if (!total_cropping_area) missingFields.push('Croppingarea');
    if (!total_land) missingFields.push('Land');
    if (!soil_type) missingFields.push('Soil');
    if (!fertilizer) missingFields.push('fertilizer');
    if (!imigation) missingFields.push('imigation');
    if (!sale) missingFields.push('sale');
    if (!rate) missingFields.push('rate');
    if (!cottonTimes) missingFields.push('cottonTimes');
    // if (!pestScoutingInput) missingFields.push('pestScoutingInput');
    if (!spray) missingFields.push('Spray');

    setMissingFields(missingFields);

    if (missingFields.length > 0) {
      /////////////////////// Display an alert or update the UI to indicate missing fields ////////////////////////////////////
      Alert.alert('Error', `Missing Required Fields: ${missingFields.join(', ')}`);
      return;
    }
    ///////////////////////////////////////////////////////// API Connaction /////////////////////////////////////////////////////////////
    try {
      const apiUrl = 'http://143.244.129.198/tmg_projects/index.php/api/store';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          farmer_name,
          father_name,
          cnic,
          contact_number,
          province,
          district,
          city,
          village,
          total_land,
          total_cropping_area,
          soil_type,
          plant_population,
          name_spray,
          rate,
          seed_pods_time,
          flower_bloom_time,
          sale,
          spray1,
          pestScoutingInput,
          sowing,
          imigation,
          fertilizer,
          spray,
          cottonTimes,
        }),
      });

      if (response.ok) {
        console.log('API request successful');
      } else {
        console.error('API request failed:', response.status, response.statusText);
      }
    }
    catch (error: any) {
      console.error('Error:', error.message);

    }


    //////////////// Pass data to the Home screen ////////////////////////////////////////
    const data = { farmer_name, father_name, cnic, contact_number, province, district, city, village, total_land, total_cropping_area, spray1, pestScouting: isPestScoutingOther ? pestScoutingInput : 'N/A', soil_type, sowing, imigation, fertilizer, spray, cottonTimes, plant_population, name_spray, flower_bloom_time, seed_pods_time, rate, sale }
    const navigateData = { farmerData: data };

    // @ts-ignore
    navigation.navigate('Home', navigateData);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title} > Personal details :</Text>

        <Text style={styles.label}>Farmer's Name <Text style={styles.star}>*</Text></Text>
        <TextInput
          style={[
            styles.input,
            missingFields.includes("Farmer's Name") && styles.missingField,
          ]}
          // style={styles.input}
          value={farmer_name}
          onChangeText={(text) => setName(text)}
          placeholder="Enter Farmer's Name"
          placeholderTextColor="grey"
          data-name="farmer_name"
        />

        <Text style={styles.label}>Father's Name <Text style={styles.star}>*</Text></Text>
        <TextInput
          style={[
            styles.input,
            missingFields.includes("Father's Name") && styles.missingField,
          ]}
          value={father_name}
          onChangeText={(text) => setFatherName(text)}
          placeholder="Enter Father's Name"
          placeholderTextColor="grey"
          data-name="father_name"

        />

        <Text style={styles.label}>CNIC</Text>
        <TextInput
          style={styles.input}
          value={cnic}
          onChangeText={handlecnic}
          placeholder="Enter CNIC"
          keyboardType="numeric"
          placeholderTextColor="grey"
          data-name="cnic"

        />

        <Text style={styles.label}>Contact No.<Text style={styles.star}>*</Text></Text>
        <TextInput
          style={[
            styles.input,
            missingFields.includes('Contact No.') && styles.missingField,
          ]}
          value={contact_number}
          onChangeText={handlecontact}
          placeholder="03*********"
          keyboardType="numeric"
          placeholderTextColor="grey"
          data-name="contact_number"
        />

        <Text style={styles.label}>Province <Text style={styles.star}>*</Text></Text>
        <View style={styles.dropdown}>
          <DropDownPicker
            style={styles.drop
            }
            open={open}
            value={province}
            items={provinceitems}
            setOpen={setOpen}
            setValue={setProvince}
            setItems={setItems}
            data-name="province"
            scrollViewProps={{
              persistentScrollbar: true, // Enable virtualization
            }}
            maxHeight={250}

          />
        </View>

        <Text style={styles.label}>District <Text style={styles.star}>*</Text></Text>
        <TextInput
          style={[
            styles.input,
            missingFields.includes("District") && styles.missingField,
          ]}
          // style={styles.input}
          value={district}
          onChangeText={(text) => setDistrict(text)}
          placeholder="Enter District"
          placeholderTextColor="grey"
          data-name="district"
        />

        <Text style={styles.label}>City <Text style={styles.star}>*</Text></Text>
        <TextInput
          style={[
            styles.input,
            missingFields.includes("City") && styles.missingField,
          ]}
          // style={styles.input}
          value={city}
          onChangeText={(text) => setCity(text)}
          placeholder="Enter City"
          placeholderTextColor="grey"
          data-name="city"
        />

        <Text style={styles.label}>Village</Text>
        <TextInput
          style={styles.input}
          value={village}
          onChangeText={(text) => setVillage(text)}
          placeholder="Enter Village Name"
          placeholderTextColor="grey"
          data-name="village"
        />

        {/* /////////////////////////////////////////////////////// Additional Data ///////////////////////////////////////////// */}

        <Text style={styles.title2} > Additional details :</Text>
        <Text style={styles.label}>Total Land <Text style={styles.star}>*</Text></Text>

        <TextInput
          style={[
            styles.input,
            missingFields.includes("Land") && styles.missingField,
          ]}
          // style={styles.input}
          value={total_land}
          onChangeText={(text) => setLand(text)}
          placeholder="Enter Total Land"
          placeholderTextColor="grey"
          data-name="total_land"
        />

        <Text style={styles.label}>Total Cropping Area <Text style={styles.star}>*</Text></Text>
        <TextInput
          style={[
            styles.input,
            missingFields.includes("Croppingarea") && styles.missingField,
          ]}
          // style={styles.input}
          value={total_cropping_area}
          onChangeText={(text) => setCroppingarea(text)}
          placeholder="Enter Total Copping Area "
          placeholderTextColor="grey"
          data-name="total_cropping_area"
        />

        <Text style={styles.label}>Soil Type <Text style={styles.star}>*</Text></Text>
        <View style={styles.dropdown}>
          <DropDownPicker
            style={styles.drop2}
            open={openSoil}
            value={soil_type}
            items={soilitems}
            setOpen={setOpenSoil}
            // setOpen={setOpen}
            setValue={setSoil}
            setItems={setSoiltypes}
            data-name="soil_type"
            scrollViewProps={{
              persistentScrollbar: true,
            }}
            maxHeight={550}
          />
        </View>

        <Text style={styles.label}>Sowing Time </Text>
        <TextInput
          style={styles.input}
          value={sowing}
          onChangeText={(text) => setSowing(text)}
          placeholder="Enter Sowing Time"
          placeholderTextColor="grey"
          data-name="swoing"
        />

        <Text style={styles.label}>Plant population </Text>
        <TextInput
          style={styles.input}
          value={plant_population}
          onChangeText={(text) => setPlant(text)}
          placeholder="Dimensions width/Height "
          placeholderTextColor="grey"
          data-name="plant_population"
        />

        <Text style={styles.label}>Imigation <Text style={styles.star}>*</Text></Text>
        <View style={styles.dropdown}>
          <DropDownPicker
            style={styles.drop2}
            open={openImigation}
            value={imigation}
            items={imigationitems}
            setOpen={setOpenimigation}
            setValue={setImigation}
            setItems={setImigationtypes}
            placeholder='Source of Water'
            data-name="imigation"
            scrollViewProps={{
              persistentScrollbar: true,
            }}
            maxHeight={550}
          />
        </View>


        <Text style={styles.label}>Fertilizer Application <Text style={styles.star}>*</Text></Text>
        <View style={styles.dropdown}>
          <DropDownPicker
            style={styles.drop2}
            open={openFertilizer}
            value={fertilizer}
            items={fertilizeritems}
            setOpen={setOpenfertilizer}
            setValue={setFertilizer}
            setItems={setFertilizertypes}
            data-name="fertilizer"
            placeholder='Select an Fertilizer'
            scrollViewProps={{
              persistentScrollbar: true,
            }}
            maxHeight={550}
          />

          <Text style={styles.label}>Spray Pesticide <Text style={styles.star}>*</Text></Text>
          <View style={styles.dropdown}>
            <DropDownPicker
              style={styles.drop2}
              open={openSpray}
              value={spray}
              items={sprayitems}
              setOpen={setOpenspray}
              setValue={setSpray}
              setItems={setSpraytypes}
              data-name="spray"
              placeholder='Select an Spray'
              scrollViewProps={{
                persistentScrollbar: true,
              }}
              maxHeight={550}
            />
          </View>

          <Text style={styles.label}>Name of Spray Pesticide </Text>
          <TextInput
            style={styles.input}
            value={name_spray}
            data-name="name_spray"
            onChangeText={(text) => setNspray(text)}
            placeholder="Enter Spray Name "
            placeholderTextColor="grey"
          />

          <Text style={styles.label}>Yield <Text style={styles.star}>*</Text></Text>
          {renderCottonTimeInputs()}
          <TouchableOpacity
            style={styles.inaddButton}
            onPress={handleAddCottonTime}>
            <Text style={styles.inbuttonText}>Add Cotton Time</Text>
          </TouchableOpacity>

          <Text style={styles.label}>Flowering Time <Text style={styles.star}>*</Text></Text>
          <Text style={styles.in1label}>Flowers bloom time </Text>
          <TextInput
            style={styles.input}
            value={flower_bloom_time}
            onChangeText={(text) => setFbplant(text)}
            placeholder="Enter Flowers bloom time"
            placeholderTextColor="grey"
            data-name="flower_bloom_time"
          />
          <Text style={styles.in1label}>Seed pods time </Text>
          <TextInput
            style={styles.input}
            value={seed_pods_time}
            onChangeText={(text) => setSpplant(text)}
            placeholder="Enter Seed pods time "
            placeholderTextColor="grey"
            data-name="seed_pods_time"
          />
          <Text style={styles.label}>Pricing Details <Text style={styles.star}>*</Text></Text>
          <Text style={styles.in1label}>Rate </Text>
          <TextInput
            style={[styles.input, missingFields.includes("rate") && styles.missingField,]}
            value={rate}
            onChangeText={(text) => setRate(text)}
            placeholder="Enter the Rate "
            placeholderTextColor="grey"
            data-name="rate"
          />
          <Text style={styles.in1label}>Sale </Text>
          <TextInput
            style={[styles.input, missingFields.includes("sale") && styles.missingField,]}
            value={sale}
            onChangeText={(text) => setSale(text)}
            placeholder="Enter the sale "
            placeholderTextColor="grey"
            data-name="sale"
          />

          <Text style={styles.label}>Pest Scouting</Text>
          <View style={styles.dropdown}>
            <DropDownPicker
              style={styles.drop2}
              open={openSpray1}
              value={spray1}
              items={spray1items}
              data-name="spray1"
              setOpen={setOpenspray1}
              setValue={handleSetSpray1Value}
              setItems={setSpray1types}
              placeholder='Select an Spray'
              scrollViewProps={{
                persistentScrollbar: true,
              }}
              maxHeight={550}
            />
          </View>

          {spray1 === 'Other' && (
            <View>
              <Text style={styles.label}>Name of Pest Scouting <Text style={styles.star}>*</Text></Text>
              <TextInput
                style={[styles.input, missingFields.includes("pestScoutingInput") && styles.missingField,]}
                value={pestScoutingInput}
                onChangeText={(text) => setPestScoutingInput(text)}
                placeholder="Enter Name of Pest Scouting"
                placeholderTextColor="grey"
                data-name="pestScoutingInput"
              />
            </View>
          )}

          <View>
            <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 23,
    color: '#000000',
    fontStyle: 'italic',
    // borderBottomWidth: 1,
  },
  star: {
    color: 'red',
  },
  container: {
    height: '100%',
    paddingLeft: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 80,
    overflow: 'scroll',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#000000',
    top: 25,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    top: 25,
    fontSize: 16,
    color: '#000',
    borderRadius: 10,

  },
  addButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    top: 55,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  drop: {
    backgroundColor: '#F2F2F2',
    borderColor: 'grey',
    borderRadius: 10,
    // marginTop: 0,
  },
  dropdown: {
    marginTop: 25,
  },
  missingField: {
    borderColor: 'red'
  },
  /////////////////////////////////////// Additional //////////////////////////////////////////////////////

  title2: {
    fontWeight: 'bold',
    fontSize: 23,
    color: '#000000',
    fontStyle: 'italic',
    paddingTop: 55,
  },
  drop2: {
    backgroundColor: '#F2F2F2',
    borderColor: 'grey',
    borderRadius: 10,
    // marginTop: 10,

  },
  dropdown2: {
    marginTop: 25,
  },
  inaddButton: {
    // position: 'absolute',
    alignSelf: 'flex-end',
    borderWidth: 0,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    right: 15,
    backgroundColor: '#228B22',
    // top: 5,
  },
  inbuttonText: {
    color: 'white',
    fontSize: 14,
  },
  inlabel: {
    fontSize: 15,
    color: '#000',
    alignSelf: 'flex-end',
    top: 15,
  },

  deleteButton: {
    // position: 'absolute',
    alignSelf: 'flex-end',
    borderWidth: 0,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    right: 1,
    // backgroundColor: 'green',
    bottom: 25,
    Left: 0,
  },
  deleteButtonText: {
    // color: 'red',
    paddingTop: 3,
    fontSize: 10,
    // fontWeight:'bold',
  },
  in1label: {
    fontSize: 15,
    color: '#000',
    alignSelf: 'flex-start',
    top: 25,
  },

});

export default AddFarmerScreen;
