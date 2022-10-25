import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({

  filterBtn:{
    flexDirection: 'row',
    alignSelf: 'center',
    marginHorizontal: 30,
    position: 'relative',
    margin: 10,
    marginTop:10
  },
all:{
  marginHorizontal: 0,
  padding: 7,

},
mathematics:{
  marginHorizontal: 10,
  padding: 7,
 
},
bio:{
  marginHorizontal: 10,
  padding: 7,

},

text:{fontSize:17,fontWeight:'bold'},

titleContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRadius: 15,
    borderBottomWidth: 1,
    borderColor: '#CBD5E1',
    alignItems: 'center',
    // marginTop: 15,
  },

  titleBox: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#334155',
  },
  date: {
    flexDirection: 'row',
    marginTop: 10,
    // marginRight: 120,
  },

  lesson: {fontSize: 15, fontWeight: 'bold', color: '#64748B'},


});


// const data = [
//     {id:1, name:'Muhammad Zia', src:require('../../assets/message/larki.png'),body:'My name Is Muhammad Zia '}
//     {id:2, name:'Muhammad Zia', src:require('../../assets/message/larki.png'),body:'My name Is Muhammad Zia '}
//     {id:3, name:'Muhammad Zia', src:require('../../assets/message/larki.png'),body:'My name Is Muhammad Zia '}
//     {id:4, name:'Muhammad Zia', src:require('../../assets/message/larki.png'),body:'My name Is Muhammad Zia '}
//     {id:5, name:'Muhammad Zia', src:require('../../assets/message/larki.png'),body:'My name Is Muhammad Zia '}
//   ]