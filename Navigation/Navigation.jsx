import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserDashboard from '../Screens/UserDashboard'
import AboutUs from '../Screens/AboutUs'
import Combos from '../Screens/Combos'
import ContactUs from '../Screens/ContactUs'
import Location from '../Screens/Location'
import Payment from '../Screens/Payment'
import Register from '../Screens/Register'
import Setting from '../Screens/Setting'
import Timings from '../Screens/Timings'
import UserProfile from '../Screens/UserProfile'

const Stack=createNativeStackNavigator()
const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen  name="Home"  component={UserDashboard}/>
            <Stack.Screen  name="Aboutus"  component={AboutUs}/>
            <Stack.Screen  name="Combos"  component={Combos}/>
            <Stack.Screen  name="Contactus"  component={ContactUs}/>
            <Stack.Screen  name="Location"  component={Location}/>
            <Stack.Screen  name="Payment"  component={Payment}/>
            <Stack.Screen  name="Register"  component={Register}/>
            <Stack.Screen  name="Setting"  component={Setting}/>
            <Stack.Screen  name="Timings"  component={Timings}/>
            <Stack.Screen  name="profile"  component={UserProfile}/>
            
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
