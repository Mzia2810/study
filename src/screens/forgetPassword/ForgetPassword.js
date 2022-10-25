import {View, Text, SafeAreaView, TouchableOpacity,Dimensions} from 'react-native';
import React, {useState} from 'react';

import InputField from '../../components/InputField';
import {styles} from './styles';
import Button from '../../components/Button';
const {width, height} = Dimensions.get('window');


const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

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
          placeholder="Email or username"
          placeholderTextColor="#64748B"
          keyboardType="email-address"
          autoFocus="false"
          returnKeyType="next"
          title="Email"
          textContentType="emailAddress"
          autoCapitalize="none"
          value={email}
          onChangeText={email => setEmail(email)}
          style={styles.inputStyle}
        />
      </View>

      <View style={{margin: 20, marginTop: 30}}>
        <Button title="Resend Code" onPress={() => navigation.navigate('Create Password')} />
      </View>

 

      {/* <TouchableOpacity >
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default ForgotPassword;
