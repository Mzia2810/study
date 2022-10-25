import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainContainer: {backgroundColor: 'white'},
  videoBox: {
    width:width/1.1,
     height:height/3.1,
     marginHorizontal:20,
     backgroundColor:'red'
    },

  container: {
        flex: 1,
        width:width,
        backgroundColor:'white',
        position:'absolute',
        marginTop:300,
  },

  goToCourse:{
    width: width / 1.1,
    height: height / 4,
    backgroundColor: 'red',
    marginHorizontal: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27487F',
    borderRadius: 30,
  },

  btn:{
    marginHorizontal: 10,
    padding: 7,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    borderWidth: 1,
    width: 313,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:90,
  },
  contentBox:{
    flexDirection: 'row',
    alignSelf: 'center',
    marginHorizontal: 30,
    position: 'relative',
    marginTop: 10,
  },

  content:{
    marginRight: 200,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  filterBtn:{
    flexDirection: 'row',
    alignSelf: 'center',
    marginHorizontal: 30,
    position: 'relative',
    marginTop: 10,
  },
all:{
  marginHorizontal: 10,
  padding: 7,
  borderColor: '#CBD5E1',
  borderRadius: 30,
  borderWidth: 1,
  width: 50,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
},
mathematics:{
  marginHorizontal: 10,
  padding: 7,
  borderColor: '#CBD5E1',
  borderRadius: 30,
  borderWidth: 1,
  width: 113,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
},
bio:{
  marginHorizontal: 10,
  padding: 7,
  borderColor: '#CBD5E1',
  borderRadius: 30,
  borderWidth: 1,
  width: 70,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
},
eng:{
  marginHorizontal: 10,
  padding: 7,
  borderColor: '#CBD5E1',
  borderRadius: 30,
  borderWidth: 1,
  width: 70,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
},
subjectList:{
  flexDirection: 'column',
  marginHorizontal: 10,
  justifyContent: 'flex-start',
  padding: 10,
  borderColor: '#CBD5E1',
  alignItems: 'center',
  borderBottomWidth: 1,
},
imgBox:{flexDirection: 'row', width: width / 1.1},
img:{
  width: width / 6,
  height: height / 11,
  borderRadius: 10,
},



});
