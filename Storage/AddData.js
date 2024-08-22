import AsyncStorage from '@react-native-async-storage/async-storage';

export const AddData = async (key, value) => {
    console.log("key value",key, value);
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  
  } catch (e) {
  
  }
};
