import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomBtn from "../../Custom/CustomBtn/CustomBtn";


const Header = () => {
  return (
    <View style={Styles.main}>
     
      <View style={Styles.slotsContainer}>
        <View style={Styles.slots}>
          <Text>Slots here will be mapped</Text>
        </View>
        <View >
          <CustomBtn text="Book a slot" nav={"Timings"} width={"60%"} />
        </View>
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  main: {
    height: "100%",
   
  },
  

  slotsContainer: {
    display: "flex",
    height: 500,
    flex: 1,
    padding: 5,
  },
  slots: {
    // borderWidth: 1,
    borderColor: "gray",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

});

export default Header;
