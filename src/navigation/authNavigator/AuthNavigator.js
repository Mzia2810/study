import React from 'react';
import {View, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CoverScreen from '../../screens/cover';
import OnboardingScreen from '../../screens/onBoarding';
import SignUp from '../../screens/register/index';
import Login from '../../screens/login/Login';
import ForgotPassword from '../../screens/forgetPassword/ForgetPassword';
import CreatePassword from '../../screens/forgetPassword/CreatePassword';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Cover">

    


      <Stack.Screen
        name="Cover"
        options={{headerShown: false,}}
        component={CoverScreen}
      />
      <Stack.Screen
        name="onBoard"
        options={{headerShown: false,}}
        component={OnboardingScreen}
      />

      <Stack.Screen
        name="Sign up"
        options={{headerShown: true,headerTitleAlign:'center',headerBackTitle:'Back',headerShadowVisible:false}}
        component={SignUp}
      />
      <Stack.Screen
        name="Login"
        options={{headerShown: true,headerTitleAlign:'center',headerBackTitle:'Back',headerShadowVisible:false}}
        component={Login}
      />

      <Stack.Screen
      name='Forgot Password'
      options={{headerShown: true,headerTitleAlign:'center',headerBackTitle:'Back',headerShadowVisible:false}}
      component={ForgotPassword}
      />
      <Stack.Screen
      name='Create Password'
      options={{headerShown: true,headerTitleAlign:'center',headerBackTitle:'Back',headerShadowVisible:false}}
      component={CreatePassword}
      />


   
    </Stack.Navigator>
  );
};

export default AuthNavigator;
