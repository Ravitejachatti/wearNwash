import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import { theme } from '../../theme';
const Navbar = () => {
  return (
    <View>
      <View style={Styles.container}>
        <Icon name="menu" color={theme.color.primary} size={35} />
        <Text style={Styles.containerText}>WearNWash</Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    // borderWidth: 1,
    borderColor: "black",
    height: 80,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "white",
    marginTop: 30,
  },
  containerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: theme.color.primary,
  },
});

export default Navbar;
