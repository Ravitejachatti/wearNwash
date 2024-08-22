// App.js
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation/Navigation'; // Your Navigation setup
import Navbar from './Components/Navbar/Navbar'; // Your Navbar component
import { Provider } from 'react-redux';
import { store } from './Redux/store';
const App = () => {
  const [currentRouteName, setCurrentRouteName] = useState('');

  // Define the pages where the navigation bar shouldn't be shown
  const noNavBarPages = ['Login', 'Register'];

  return (
    <Provider store={store}>
      <NavigationContainer
      onStateChange={(state) => {
        const routeName = state?.routes[state.index]?.name;
        setCurrentRouteName(routeName);
      }}
    >
      <View style={{ flex: 1 }}>
        {/* Conditionally Render Navigation Bar */}
        {!noNavBarPages.includes(currentRouteName || '') && (
          <View >
            <Navbar />
          </View>
        )}

        {/* Render Navigation */}
        <Navigation />
      </View>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
