import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {styles} from '../messages/styles';
const {width, height} = Dimensions.get('window');

const data = [
  {
    id: 1,
    name: 'Muhammad Zia',
    src: require('../../assets/message/larki.png'),
    body: 'My name Is Muhammad Zia ',
    time: '3 min',
  },
  {
    id: 2,
    name: 'Muhammad Zia',
    src: require('../../assets/message/larki.png'),
    body: 'My name Is Muhammad Zia ',
    time: '3 min',
  },
  {
    id: 3,
    name: 'Muhammad Zia',
    src: require('../../assets/message/larki.png'),
    body: 'My name Is Muhammad Zia ',
    time: '3 min',
  },
  {
    id: 4,
    name: 'Muhammad Zia',
    src: require('../../assets/message/larki.png'),
    body: 'My name Is Muhammad Zia ',
    time: '3 min',
  },
  {
    id: 5,
    name: 'Muhammad Zia',
    src: require('../../assets/message/larki.png'),
    body: 'My name Is Muhammad Zia ',
    time: '3 min',
  },
  {
    id: 6,
    name: 'Muhammad Zia',
    src: require('../../assets/message/larki.png'),
    body: 'My name Is Muhammad Zia ',
    time: '3 min',
  },
  {
    id: 7,
    name: 'Muhammad Zia',
    src: require('../../assets/message/larki.png'),
    body: 'My name Is Muhammad Zia ',
    time: '3 min',
  },
  {
    id: 8,
    name: 'Muhammad Zia',
    src: require('../../assets/message/larki.png'),
    body: 'My name Is Muhammad Zia ',
    time: '3 min',
  },
  {
    id: 9,
    name: 'Muhammad Zia',
    src: require('../../assets/message/larki.png'),
    body: 'My name Is Muhammad Zia ',
    time: '3 min',
  },
];

const Message = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.filterBtn}>
        <TouchableOpacity style={styles.all}>
          <Text style={styles.text}>All Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mathematics}>
          <Text style={styles.text}>Unread Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bio}>
          <Text style={styles.text}>Active</Text>
        </TouchableOpacity>
      </View>

      <View style={{backgroundColor: 'white'}}>
        <FlatList
        style={{width:width,height:'90%'}}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({item}) => (
            <ScrollView key={item.id}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: 10,
                    justifyContent: 'flex-start',

                    margin: 10,
                    borderColor: '#CBD5E1',
                    alignItems: 'center',
                  }}>
                  <View>
                    <Image source={item.src} style={{width: 70, height: 70}} />
                  </View>
                  <View>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          marginLeft: 30,
                          fontSize: 15,
                          fontWeight: 'bold',
                        }}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          marginLeft: 90,
                          fontSize: 15,
                          fontWeight: 'bold',
                        }}>
                        {item.time}
                      </Text>
                    </View>

                    <Text style={{marginLeft: 30}}>{item.body}</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          )}
        />
      </View>
      {/* <ScrollView style={styles.container}>
        {data.map(item => {
          return (
            <View key={item.id}>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 10,
                  justifyContent: 'flex-start',
               
          margin:10,
                  borderColor: '#CBD5E1',
                  alignItems: 'center',
                }}>
             <View>
              <Image
              source={item.src}
              style={{width:70,height:70}}
              />
             </View>
                <View>
                  <View style={{flexDirection:'row'}}>
                  <Text style={{marginLeft: 30,fontSize:15,fontWeight:'bold'}}>{item.name}</Text>
                  <Text style={{marginLeft: 90,fontSize:15,fontWeight:'bold'}}>{item.time}</Text>
                  </View>
              

                <Text style={{marginLeft: 30}}>{item.body}</Text>
                </View>
           
              </View>
            </View>
          );
        })}
      </ScrollView> */}
    </View>
  );
};

export default Message;
