import React, { useEffect, useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import CustomBtn from "../../Custom/CustomBtn/CustomBtn";
import { useDispatch, useSelector } from "react-redux";
import { getBasedOnLocation } from "../../Redux/App/action";
import { useNavigation } from "@react-navigation/native";
import { GetData } from "../../Storage/GetData";
import { AddData } from "../../Storage/AddData"; 
import { theme } from "../../theme";
const LocationComp = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [userLocation, setUserLocation] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null); 
  const [selectedMachineId, setSelectedMachineId] = useState(null); 
  const [selectedMachineName,setSelectedMachineName] = useState(null)
  const [active, setActive] = useState(false);
  const store = useSelector((state) => state.app.centers);

  useEffect(() => {
    dispatch(getBasedOnLocation())
      .then((res) => {
        // Handle the response here if needed
      })
      .catch((err) => {
        console.log("Error fetching location data:", err);
      });

    const fetchLocation = async () => {
      try {
        const location = await GetData("location");
        console.log("Retrieved location from AsyncStorage:", location);
        if (location) {
          setUserLocation(JSON.parse(location));
        }
      } catch (error) {
        console.error("Failed to fetch location from AsyncStorage", error);
      }
    };

    fetchLocation();
  }, [dispatch]);

  let filterLocation = [];

  if (userLocation && Array.isArray(store)) {
    filterLocation = store.filter((item) => item.name.toLowerCase() === userLocation.toLowerCase());
  } else {
    console.warn("Store is not available or is not an array.");
  }
  
  

  const handleCenterChange = (value) => {
    setSelectedTimeSlot(value); 

  };



  const renderMachineItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => setSelectedMachineId(item)}
      style={[
        styles.machineItem,
        {
          backgroundColor:
            selectedMachineId === item
              ? "gray" 
              : item.status
              ? "green"
              : "red"
        }
      ]}
    >
      <Text style={styles.machineName}>{item.name}</Text>
      <Text>{item.status ? "Available" : "Unavailable"}</Text>  
    </TouchableOpacity>
  );

  const id = filterLocation[0]?._id;

  const handleProceed = async () => {
    if (selectedMachineId && selectedTimeSlot) {
      console.log("clicked", selectedMachineId);
      const today = new Date().toISOString().split('T')[0];
  
      try {
        await AddData("machineId", selectedMachineId._id);
        await AddData("machineName", selectedMachineId.name);
        await AddData("date", today);
        await AddData("timeSlot", selectedTimeSlot);
        await AddData("locationId", id);
        console.log("Data stored successfully!");
  
       
        setTimeout(() => {
          navigation.navigate("Payment");
        }, 100);
      } catch (error) {
        console.error("Error storing data:", error);
      }
    } else {
      console.log("Please select both a machine and a time slot.");
    }
  };
  

  return (
    <View style={styles.main}>
      <View style={styles.dropDownContainer}>
        <View style={styles.inputWrapper}>
          <RNPickerSelect
            onValueChange={handleCenterChange}
            placeholder={{
              label: "Select the Slot",
              value: null,
            }}
            items={[
              { label: "09:00 - 09:30", value: "09:00-09:30" },
              { label: "09:30 - 10:00", value: "09:30-10:00" },
              { label: "10:00 - 10:30", value: "10:00-10:30" },
              { label: "10:30 - 11:00", value: "10:30-11:00" },
              { label: "11:00 - 11:30", value: "11:00-11:30" },
              { label: "11:30 - 12:00", value: "11:30-12:00" },
              { label: "12:00 - 12:30", value: "12:00-12:30" },
              { label: "12:30 - 13:00", value: "12:30-13:00" },
              { label: "13:00 - 13:30", value: "13:00-13:30" },
              { label: "13:30 - 14:00", value: "13:30-14:00" },
              { label: "14:00 - 14:30", value: "14:00-14:30" },
              { label: "14:30 - 15:00", value: "14:30-15:00" },
              { label: "15:00 - 15:30", value: "15:00-15:30" },
              { label: "15:30 - 16:00", value: "15:30-16:00" },
              { label: "16:00 - 16:30", value: "16:00-16:30" },
              { label: "16:30 - 17:00", value: "16:30-17:00" }
            ]}
            style={{
              inputIOS: styles.input,
              inputAndroid: styles.input,
              placeholder: styles.placeholder,
              iconContainer: styles.iconContainer,
            }}
          />
        </View>

        <View style={styles.washingMachines}>
          {filterLocation.length > 0 ? (
            <FlatList
              data={filterLocation[0].machineId}
              renderItem={renderMachineItem}
              keyExtractor={(item) => item._id}
              numColumns={3}
              contentContainerStyle={{ paddingBottom: 20 }}
            />
          ) : (
            <Text>No machines found for the selected location.</Text>
          )}
        </View>


        <TouchableOpacity  disabled={!selectedMachineId || !selectedTimeSlot}   onPress={handleProceed}  style={styles.btn}>
            <Text style={{ fontSize: 22, textAlign: "center", color: "white" }}>Proceed</Text>
        </TouchableOpacity>
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
    fontSize: 23,
  },
  placeholder: {
    color: "black",
  },
  iconContainer: {
    top: 10,
    right: 10,
  },
  washingMachines: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  machineItem: {
    borderWidth: 1,
    borderColor: "green",
    width: 120,
    height: 160,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 2,
    marginBottom: 10,
  },
  machineName: {
    color: "white",
    fontSize: 16,
  },
  btn:{
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "60%",
    margin: "auto",
    backgroundColor: theme.color.secondary,
    marginVertical:20
   }
});

export default LocationComp;
