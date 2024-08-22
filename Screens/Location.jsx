import React from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import LocationComp from '../Components/LocationComp/LocationComp';


const Location = () => {
   return (
    <View style={styles.main}>
     <LocationComp/>
    </View>
  );
};

const styles = StyleSheet.create({

main:{
  padding:20
}
});

export default Location;
