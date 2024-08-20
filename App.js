// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux/store';  // Adjust the path as needed
import Header from './Components/Header/Header';
import UserDashboard from './Screens/UserDashboard';
import Location from './Screens/Location';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        {/* Uncomment these as needed */}
        {/* <UserDashboard /> */}
        {/* <Location /> */}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
