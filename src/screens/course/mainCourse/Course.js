import {
  View,
  Text,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useCallback, useRef} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {styles} from '../mainCourse/styles';

const {width, height} = Dimensions.get('window');

const okay = <FontAwesome5 name="check-circle" color="white" size={40} />;
const persons = [
  {
    id: '1',
    title: 'How to prepare documentation assignment',
    src: require('../../../assets/cover/Header.png'),
    body: 'Firebase Authentication  SDKs to authenticate users to your app.',
  },
  {
    id: '2',
    title: 'How to prepare documentation assignment',
    src: require('../../../assets/cover/Header.png'),
    body: 'Firebase Authentication  SDKs to authenticate users to your app.',
  },
  {
    id: '3',
    title: 'How to prepare documentation assignment',
    src: require('../../../assets/cover/Header.png'),
    body: 'Firebase Authentication  SDKs to authenticate users to your app.',
  },
];

const MainCourse = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={styles.goToCourse}>
        
          
        <TouchableOpacity
        onPress={() =>navigation.navigate('Go to my Course')}
          style={styles.btn}>
            
          <Text style={{color: 'white'}}>Go TO My Courses</Text>
        </TouchableOpacity>
      </View>

      <View
        style={styles.contentBox}>
        <Text
          style={styles.content}>
          Content
        </Text>
        <Text style={{fontSize: 20}}>View all</Text>
      </View>

      <View
        style={styles.filterBtn}>
        <TouchableOpacity
          style={styles.all}>
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mathematics}>
          <Text>Mathematics</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bio}>
          <Text>Biology</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.eng}>
          <Text>English</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        {persons.map(person => {
          return (
            <View key={person.id}>
              <TouchableOpacity onPress={() => navigation.navigate('Course')}>

              <View
                style={styles.subjectList}>
                <View style={styles.imgBox}>
                  <Image
                    source={person.src}
                    style={styles.img}
                  />
                  <View style={{marginLeft: 20, width: 270,}}>
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: 'bold',
                        color: 'black',
                      }}>
                      {person.title}
                    </Text>
                    <Text style={{fontSize: 17, color: '#64748B'}}>
                      {person.body}
                    </Text>
                  </View>
                </View>
              </View>
              </TouchableOpacity>

            </View>
          );
        })}
      </View>
    </View>
  );
};

export default MainCourse;
