import AsyncStorage from '@react-native-async-storage/async-storage';

export const AddData = async (key, value) => {
    console.log("key value",key, value);
  try {
    // Convert the value to a string before storing
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
   // console.log("Data successfully saved");
  } catch (e) {
    //console.error("Failed to save the data to the storage", e);
  }
};
