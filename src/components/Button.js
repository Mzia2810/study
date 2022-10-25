import { View, Text ,StyleSheet ,TouchableOpacity,Dimensions} from 'react-native'
import React from 'react'

const {width, height} = Dimensions.get('window');


const Button = (props) => {

    const {title,onPress} = props;

  return (
    <TouchableOpacity  onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>

  )
}

export default Button


const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      justifyContent: "center",
      padding: 16
    },
    appButtonContainer: {
        width:width/1.1,
        height:height/12,
      backgroundColor: "#52B6DF",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
     
    },
    appButtonText: {
        marginTop:5,
      fontSize: 22,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
    }
  });