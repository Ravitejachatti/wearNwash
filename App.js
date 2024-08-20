
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header/Header";
import UserDashboard from "./Screens/UserDashboard";
import Location from "./Screens/Location";
// import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
export default function App() {
  return (
   <Provider store={store}>
     <View>
       <Header />
       {/* <UserDashboard/> */}
       <Location/>
      </View>
   </Provider>
  
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
