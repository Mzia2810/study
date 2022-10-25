import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Button from '../../components/Button';
import auth, {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import InputField from '../../components/InputField';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {launchImageLibrary} from 'react-native-image-picker';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOFBirth, setDateOFBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [isImage, setIsImage] = useState(true);
  const [imagePath, setImagePath] = useState({});

  const handleSignOut = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };

  // const PickImage = () => {
  //   let options = {
  //     title: 'Select Image',
  //     customButtons: [
  //       {
  //         name: 'customOptionKey',
  //         title: 'Choose file from Custom Option'
  //       },
  //     ],
  //     storageOptions: {
  //       skipBackup: true,
  //       path: 'images',
  //     },
  //   };

  //   launchImageLibrary.launchImageLibrary(options, res => {
  //     console.log('Response = ', res);
  //     if (res.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (res.error) {
  //       console.log('ImagePicker Error: ', res.error);
  //     } else if (res.customButton) {
  //       console.log('User tapped custom button: ', res.customButton);
  //       alert(res.customButton);
  //     } else {
  //       let source = res;
  //       setImagePath({source});
  //       console.log(imagePath)
  //     }
  //   });
  // };

  const PickImage = async () => {
    const options = {
      title: 'Select Image',
      type: 'library',
      options: {
        maxHeight: 200,
        maxWidth: 200,
        selectionLimit: 1,
        mediaType: 'photo',
        includeBase64: false,
      },
    };
    const result = await launchImageLibrary(options);
    // console.log(result);
    setIsImage(false);
    setImagePath(result.assets[0]);
    console.log("ssssssss",imagePath);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{alignSelf: 'flex-start', margin: 20, flexDirection: 'row'}}>
        {/* <Image
          source={require('../../assets/zia/pic.jpeg')}
          style={{width: 100, height: 100, borderRadius: 50}}
        /> */}
        {isImage ? (
          <Image
            source={require('../../assets/zia/pic.jpeg')}
            style={{width: 100, height: 100, borderRadius: 50}}
          />
        ) : (
          <Image
            source={{uri: imagePath.uri}}
            style={{width: 100, height: 100, borderRadius: 50}}
          />
        )}
        <View style={{marginLeft: 75, marginTop: 15, position: 'absolute'}}>
          <TouchableOpacity onPress={PickImage}>
            <MaterialCommunityIcons
              name="camera"
              size={15}
              color="white"
              style={{borderRadius: 50, backgroundColor: '#52B6DF', padding: 5}}
            />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <View style={{marginHorizontal: 10}}>
            <Text>Welcome</Text>
            <Text style={{fontSize: 20}}>Muhammad Zia</Text>
          </View>
          <View style={{marginHorizontal: 60}}>
            <MaterialCommunityIcons
            onPress={handleSignOut} 
              name="logout"
              size={40}
              color="#52B6DF"
              // style={s}
            />
          </View>
        </View>
      </View>

      <InputField
        placeholder="Your name"
        placeholderTextColor="#64748B"
        keyboardType="default"
        autoFocus="true"
        title="Name"
        textContentType="name"
        returnKeyType="next"
        autoCorrect={false}
        autoCapitalize="none"
        value={name}
        onChangeText={name => setName(name)}
        style={styles.inputStyle}
      />

      <InputField
        placeholder="Xyz@gmail.com"
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
      <InputField
        placeholder="Date of Birth"
        placeholderTextColor="#64748B"
        keyboardType="default"
        autoFocus="false"
        returnKeyType="next"
        title="Date of Birth"
        textContentType="default"
        autoCapitalize="none"
        value={dateOFBirth}
        onChangeText={dateOFBirth => setDateOFBirth(dateOFBirth)}
        style={styles.inputStyle}
      />

      <InputField
        placeholder="Phone"
        placeholderTextColor="#64748B"
        returnKeyType="next"
        keyboardType="numeric"
        autoFocus="false"
        title="Phone"
        textContentType="telephoneNumber"
        autoCapitalize="none"
        value={phone}
        onChangeText={phone => setPhone(phone)}
        style={styles.inputStyle}
      />

      <View style={{margin: 20}}>
        <Button title="Update Profile" />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 25,
    paddingRight: 15,
    borderRadius: 10,
    borderColor: '#CBD5E1',
    borderWidth: 2,
    marginTop: 15,
    height: 50,
    fontSize: 20,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 25,
    alignItems: 'center',
    letterSpacing: 0.2,
    color: '#64748B',
    backgroundColor: '#F1F5F966',
  },
});
