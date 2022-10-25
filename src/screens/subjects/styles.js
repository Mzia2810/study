import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    iconMainContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop:15,
      },
      bgImage:{
          width:70,
          height:70,
          
        },
        iconBox: {padding: 12, alignItems: 'center'},
      icon:{
        position: 'absolute',
        marginTop:15,
        padding: 10,
        borderRadius: 20,
      },
    iconText: {
        fontSize: 17,
        color: 'black',
        paddingTop:10,
        fontWeight: 'bold',
      },
     
});