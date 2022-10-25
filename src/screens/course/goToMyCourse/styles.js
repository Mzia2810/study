import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainContainer: {backgroundColor: 'white'},
  videoBox: {width: width / 1.1, height: height / 2.1, marginHorizontal: 20},

  container: {
    flex: 1,
    width: width,
    backgroundColor: 'white',
    position: 'absolute',
    marginTop: 40,
  },
contentContainer:{
  flexDirection: 'row',
  alignSelf: 'center',
  marginHorizontal: 30,
  position: 'relative',
},
  content: {marginRight: 200, fontSize: 20, fontWeight: 'bold', color: 'black'},
  titleContainer: {
    flexDirection: 'column',
    marginHorizontal: 10,
    justifyContent: 'flex-start',
    padding: 7,
    borderRadius: 15,
    borderWidth: 1,
    marginVertical: 5,
    borderColor: '#CBD5E1',
    alignItems: 'center',
  },

  heading: {fontSize: 22, fontWeight: 'bold', color: 'black'},

  titleBox: {marginLeft: 20, width: 270, marginTop: 10},

  image: {
    width: width / 6,
    height: height / 11,
    borderRadius: 10,
  },

  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },

  progressBox: {width: width / 1.1, marginTop: 10},

  lesson: {fontSize: 20, fontWeight: 'bold'},

  courseComplete: {
    flexDirection: 'column',
    marginHorizontal: 10,
    justifyContent: 'flex-start',
    padding: 4,
    borderRadius: 15,
    borderWidth: 1,
    marginVertical: 5,
    borderColor: '#CBD5E1',
    alignItems: 'center',
    backgroundColor: '#46BD84',
  },

  courseCompleteHeadingBox: {
    marginLeft: 30,
    width: 270,
    marginTop: 10,
  },
  courseCompleteHeading: {fontSize: 17, color: 'white'},
  icon: {flexDirection: 'row', width: width / 1.1, justifyContent: 'center'},

  // item: {
  //   padding: 10,
  //   fontSize: 15,
  // },
  // label: {
  //   position: 'absolute',
  //   marginLeft: 20,
  //   fontSize: 20,
  //   color: 'black',
  // },
  // inputStyle: {
  //   flex: 1,
  //   color: 'black',
  //   paddingLeft: 25,
  //   paddingRight: 15,
  //   borderRadius: 10,
  //   borderColor: '#CBD5E1',
  //   borderWidth: 2,
  //   marginTop: 15,
  //   height: 50,
  //   fontSize: 20,
  //   fontFamily: 'Poppins',
  //   fontStyle: 'normal',
  //   fontSize: 15,
  //   lineHeight: 25,
  //   alignItems: 'center',
  //   letterSpacing: 0.2,
  //   color: '#64748B',
  //   backgroundColor: '#F1F5F966',
  // },

  // SignButton: {
  //   width: 350,
  //   height: 49,
  //   margin: 20,
  //   backgroundColor: 'red',
  // },
  // buttonText: {
  //   width: 350,
  //   height: 49,
  //   margin: 20,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: 'green',
  // },
  // checkboxContainer: {
  //   flexDirection: 'row',
  //   marginBottom: 20,
  //   marginLeft: 16,
  // },
  // checkbox: {
  //   fontSize: 20,
  //   alignSelf: 'center',
  // },
  // checkBoxText: {
  //   marginLeft: 20,
  //   marginTop: 5,
  //   fontSize: 20,
  //   fontFamily: ' Poppins',
  //   fontSize: 13,
  //   lineHeight: 22,
  //   letterSpacing: 0.2,
  // },

  // // Show Modal

  // centeredView: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   // marginTop: 10,
  // },
  // modalView: {
  //   width: width / 1.1,
  //   height: height / 1.7,
  //   margin: 20,
  //   backgroundColor: 'white',
  //   borderRadius: 20,
  //   padding: 35,
  //   alignItems: 'center',
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  //   elevation: 5,
  // },
  // button: {
  //   width: width / 2,
  //   height: height / 15,
  //   borderRadius: 20,
  //   padding: 10,
  //   elevation: 2,
  //   position: 'absolute',
  //   marginTop: 350,
  // },

  // buttonClose: {
  //   backgroundColor: '#52B6DF',
  // },
  // textStyle: {
  //   color: 'white',
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  //   // marginTop:5,
  //   fontSize: 20,
  // },
  // modalHeader: {
  //   position: 'absolute',
  //   marginTop: 190,
  //   textAlign: 'center',
  //   fontSize: 23,
  //   fontWeight: 'bold',
  // },
  // modalText: {
  //   marginTop: 120,
  //   textAlign: 'center',
  // },
});
