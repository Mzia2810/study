import {View, Text, SafeAreaView, TouchableOpacity,Dimensions} from 'react-native';
import React, {useState} from 'react';

import InputField from '../../components/InputField';
import {styles} from './styles';
import Button from '../../components/Button';
const {width, height} = Dimensions.get('window');


const CreatePassword = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={{marginTop:30,marginLeft:20 ,}}>
        <Text
          style={{

            color: 'black',
            fontSize: 23,
            fontWeight: 'bold',
          }}>
          Forgot Password ?
        </Text>
        <Text style={{width:width/1.1,lineHeight:20.5,marginTop:10, letterSpacing: 0.2,}}>I agree with the terms and conditions
             and also the protection of my personal data on this application</Text>
      </View>
      <View style={{marginTop: 30}}>
      <InputField
          placeholder="Password"
          placeholderTextColor="#64748B"
          returnKeyType="next"
          keyboardType="password"
          autoFocus="false"
          title="Password"
          textContentType="password"
          autoCapitalize="none"
          secureTextEntry={true}
          value={password}
          onChangeText={password => setPassword(password)}
          style={styles.inputStyle}
        />
      <InputField
          placeholder="Confirm Password"
          placeholderTextColor="#64748B"
          returnKeyType="next"
          keyboardType="password"
          autoFocus="false"
          title="Confirm Password"
          textContentType="newPassword"
          autoCapitalize="none"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
          style={styles.inputStyle}
        />
      </View>

      <View style={{margin: 20, marginTop: 30}}>
        <Button title="Create Password"  />
      </View>

 

      {/* <TouchableOpacity >
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default CreatePassword;
