
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header/Header";
import UserDashboard from "./Screens/UserDashboard";
import Location from "./Screens/Location";
// import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <View>
       <Header />
       {/* <UserDashboard/> */}
       <Location/>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
