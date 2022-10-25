import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import AppRoute from './src/navigation/navigator/AppRoute';

const App = () => {
  return (
    <>
    <StatusBar backgroundColor='#52B6DF'/>
     <AppRoute/>
    </>
  )
}

export default App