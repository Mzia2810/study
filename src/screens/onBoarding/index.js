import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

const OnboardingScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Image source={require('../../assets/cover/Header.png')} style={styles.Image}/>
      {/* <Image source={require('../../../assets/Images/BGO.png')} style={styles.BGImage}/> */}
      {/* <Image source={require('../../assets/cover/Logo.png')} style={styles.logo}/> */}
      <Text style={styles.heading}>
      Find your favorite class
      </Text>
      <Text style={styles.subText}>
      If you are updating from an old project you need to make sure the 
      correct files are loaded from native code to adopt the new single file entry .
      </Text>
      <View style={styles.buttonBox}>
        <TouchableOpacity onPress={() => navigation.navigate('Sign up')}>
          <Text style={styles.buttons}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttons}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OnboardingScreen