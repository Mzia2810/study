import React from 'react';
import {View, Text, SafeAreaView, Image,TouchableOpacity} from 'react-native';
import {styles} from './styles';

const CoverScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{alignItems: 'center', flex: 1, backgroundColor: 'red'}}>

      <Image
        style={styles.coverImage}
        source={require('../../assets/cover/coverImage.png')}
      />
      <Image
        source={require('../../assets/cover/coverBackground.png')}
        style={styles.colorBox}
      />
      <Image
        source={require('../../assets/cover/Logo.png')}
        style={styles.logo}
      />


      <View style={styles.bottomView}>
        <Text style={styles.heading}> Hello and welcome here </Text>
      
        <Text style={styles.subText}>
          Get an overview of how you are performing and motivate yourself to
          achieve even now
        </Text>
        
        <TouchableOpacity onPress={() => navigation.navigate('onBoard')}>
         <Text style={styles.button}> Let’s Start  </Text>
          
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};

export default CoverScreen;

