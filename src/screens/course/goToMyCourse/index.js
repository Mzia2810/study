import {View, Text, Image, SafeAreaView, Dimensions} from 'react-native';
import React, {useState, useCallback, useRef} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Button from '../../../components/Button';
import {styles} from '../../course/goToMyCourse/styles';
import ProgressBar from 'react-native-animated-progress';
const {width, height} = Dimensions.get('window');

const okay = <FontAwesome5 name="check-circle" color="white" size={40} />;
const persons = [
  {
    id: '1',
    title: 'How to prepare documentation assignment',
    src: require('../../../assets/cover/Header.png'),
  },
  {
    id: '2',
    title: 'How to prepare documentation assignment',
    src: require('../../../assets/cover/Header.png'),
  },
  {
    id: '3',
    title: 'How to prepare documentation assignment',
    src: require('../../../assets/cover/Header.png'),
  },
];

const GoTOMyCourse = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={styles.contentContainer}>
        <Text style={styles.content}>
          Content
        </Text>
        <Text style={{fontSize: 20}}>View all</Text>
      </View>

      <View style={styles.container}>
        {persons.map(person => {
          return (
            <View key={person.id}>
              <View
                style={styles.titleContainer}>
                <View style={{flexDirection: 'row', width: width / 1.1}}>
                  <Image
                    source={person.src}
                    style={styles.image}
                  />
                  <View style={styles.titleBox}>
                    <Text
                      style={styles.title}>
                      {person.title}
                    </Text>
                  </View>
                </View>

                <View style={styles.progressBox}>
                  <Text style={styles.lesson}>
                    16/28 Lesson
                  </Text>
                  <ProgressBar
                    progress={30}
                    height={7}
                    backgroundColor="#52B6DF"
                    animated={false}
                  />
                </View>
              </View>
            </View>
          );
        })}
      </View>
      {/* <View style={{margin: 17, position: 'relative', marginTop: 245}}>
        <Button title="Add to Course" />
      </View> */}

       <View
        style={{
            marginTop:460,
          marginHorizontal: 20,
          position: 'absolute',
        }}>
        <Text style={styles.heading}>
          Completed Course
        </Text>
      
      </View>

      <View style={{position:'absolute',marginTop:500,}}>
        <View
          style={styles.courseComplete}>
          <View style={styles.icon}>
            <Text >{okay}</Text>
            <View style={styles.courseCompleteHeadingBox}>
              <Text style={styles.courseCompleteHeading}>
              How to prepare documentation 
              </Text>
            </View>
          </View>
        
        </View>
      </View>
      <View style={{position:'absolute',marginTop:560,}}>
        <View
          style={styles.courseComplete}>
          <View style={styles.icon}>
            <Text >{okay}</Text>
            <View style={styles.courseCompleteHeadingBox}>
              <Text style={styles.courseCompleteHeading}>
              How to prepare documentation 
              </Text>
            </View>
          </View>
        
        </View>
      </View>
    </View>
  );
};

export default GoTOMyCourse;
