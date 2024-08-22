import React, { useEffect, useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { View, StyleSheet } from "react-native";
import CustomBtn from "../../Custom/CustomBtn/CustomBtn";
import Location from "react-native-vector-icons/FontAwesome6";
import Washing from "react-native-vector-icons/MaterialCommunityIcons";
import  {theme}  from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import { getBasedOnLocation } from "../../Redux/App/action";
import { AddData } from "../../Storage/AddData";
import { GetData } from "../../Storage/GetData";
import { useNavigation } from "@react-navigation/native";
const LocationComp = () => {
  const navigation = useNavigation()
  const location = useSelector(state => state.app.centers);
  const dispatch = useDispatch();
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [machineOptions, setMachineOptions] = useState([]);
  console.log("machine options",machineOptions)

  useEffect(() => {
    dispatch(getBasedOnLocation())
      .then(res => {
       // console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, [dispatch]);

  const handleCenterChange = async (value) => {
    console.log("VALUE", value);
    setSelectedCenter(value);

    if (value) {
      const filteredMachines = location.find(center => center._id === value)?.machineId || [];
      setMachineOptions(filteredMachines.map(machine => ({
        label: machine.name,
        value: machine._id,
      })));

      try {
        await AddData('selectedCenterSk', value);
      } catch (error) {
       console.error('Error storing data in AsyncStorage:', error);
      }
    } else {
      setMachineOptions([]);
      await AddData('selectedCenter', '');  
    }
  };
  
  const handleMachineChange = async( value)=>{
    try {

     await AddData('machineOptionsSk', value);
    } catch (error) {
      console.error('Error storing data in AsyncStorage:', error);
    }
  }

  return (
    <View style={styles.main}>
      <View style={styles.dropDownContainer}>
        <View style={styles.inputWrapper}>
          <RNPickerSelect
            onValueChange={handleCenterChange}
            placeholder={{
              label: "Select the Location",
              value: null,
            }}
            items={location?.map(center => ({
              label: center.name,
              value: center._id,
            }))}
            style={{
              inputIOS: styles.input,
              inputAndroid: styles.input,
              placeholder: styles.placeholder,
              iconContainer: styles.iconContainer,
            }}
            Icon={() => (
              <Location name="location-dot" size={40} color={theme.color.secondary} />
            )}
          />
        </View>

        <View style={styles.inputWrapper}>
          <RNPickerSelect
            onValueChange={(value) => handleMachineChange(value)} 
            placeholder={{
              label: "Select the Machine",
              value: null,
            }}
            items={machineOptions} 
            style={{
              inputIOS: styles.input,
              inputAndroid: styles.input,
              placeholder: styles.placeholder,
              iconContainer: styles.iconContainer,
            }}
            Icon={() => (
              <Washing name="washing-machine" color={theme.color.secondary} size={40} />
            )}
          />
        </View>

        <CustomBtn text={"Proceed"} nav={"Timings"} disabled={!selectedCenter || !machineOptions.length}/>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  
  dropDownContainer: {
    marginBottom: 30,
  },
  inputWrapper: {
    borderWidth: 0.5,
    borderRadius: 23,
    marginBottom: 30, 
  },
  input: {
    paddingVertical: 15, 
    paddingHorizontal: 10,
    color: "black",
    fontSize:23
  },
  placeholder: {
    color: "black",
  },
  iconContainer: {
    top: 10,    
    right: 10,  
    
  },
  
});

export default LocationComp;
