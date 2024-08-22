import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux/store';  
import Navigation from './Navigation/Navigation';  
import Navbar from './Components/Navbar/Navbar';
import { useNavigationState } from '@react-navigation/native';

export default function App() {

  return (
    <Provider store={store}>
      <Navbar/>
     <Navigation />
    </Provider>
  );
}
