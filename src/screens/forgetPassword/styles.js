import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainContainer: {backgroundColor: 'white',flex:1},

  heading:{
    fontSize:23,
    fontWeight:'bold',
    marginTop:100,
    marginLeft:100,
  }
 
  
});
