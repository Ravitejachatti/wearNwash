// Navigation/Navigation.jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutUs from '../Screens/AboutUs';
import Combos from '../Screens/Combos';
import ContactUs from '../Screens/ContactUs';
import Location from '../Screens/Location';
import Payment from '../Screens/Payment';
import Register from '../Screens/Register';
import Setting from '../Screens/Setting';
import Timings from '../Screens/Timings';
import UserProfile from '../Screens/UserProfile';
import Home from '../Screens/Home';
import Login from '../Screens/Login';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Stack.Screen options={{ headerShown: false }} name="AboutUs" component={AboutUs} />
      <Stack.Screen options={{ headerShown: false }} name="Combos" component={Combos} />
      <Stack.Screen options={{ headerShown: false }} name="ContactUs" component={ContactUs} />
      <Stack.Screen options={{ headerShown: false }} name="Location" component={Location} />
      <Stack.Screen options={{ headerShown: false }} name="Payment" component={Payment} />
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
      <Stack.Screen options={{ headerShown: false }} name="Setting" component={Setting} />
      <Stack.Screen options={{ headerShown: false }} name="Timings" component={Timings} />
      <Stack.Screen options={{ headerShown: false }} name="UserProfile" component={UserProfile} />
    </Stack.Navigator>
  );
};

export default Navigation;
