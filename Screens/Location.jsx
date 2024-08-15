import React from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
// import { Picker } from '@react-native-picker/picker';
const data=[]

const Location = () => {
  
   return (
    <View style={styles.containerMain}>
      <Text>Locationname</Text>
      <View>
        <View style={styles.containerUser}>
          <Dropdown style={styles.containerDropDown}
          data={data}/>
        </View>
        <View style={styles.containerUser}>
        <TextInput  
            placeholder='Enter the center name' 
            
          />
          
          
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerDropDown:{
    borderWidth:10,
    borderColor:"black"
  }
  // containerMain: {
  //   width: "70%",
  //   height: "50%",
  //   backgroundColor: "skyblue",
  //   margin: "auto",
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  // containerUser: {
  //   width: 200,
  //   height: 40,
  //   marginTop: 10,
  //   backgroundColor: "blue",
  //   justifyContent: 'center',
  // },
  // picker: {
  //   width: 200,
  //   height: 50,
  // }
});

export default Location;
