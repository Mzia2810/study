import {View, Text, ScrollView, SafeAreaView, Dimensions} from 'react-native';
import React, {useState, useCallback, useRef} from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import {styles} from '../course/styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Button from '../../components/Button';

const video = <EvilIcons name="play" color="gray" size={40} />;
const {width, height} = Dimensions.get('window');

const persons = [
  {
    id: '1',
    name: 'Earnest Green',
  },
  {
    id: '2',
    name: 'Winston Orn',
  },
  {
    id: '3',
    name: 'Carlton Collins',
  },
  {
    id: '4',
    name: 'Earnest Green',
  },
  {
    id: '5',
    name: 'Winston Orn',
  },
  {
    id: '6',
    name: 'Carlton Collins',
  },
  {
    id: '7',
    name: 'Earnest Green',
  },
  {
    id: '8',
    name: 'Winston Orn',
  },
  {
    id: '9',
    name: 'Carlton Collins',
  },
];

const Course = ({navigation}) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={styles.videoBox}>
        <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black'}}>
          How to make your design more artful & lyrical
        </Text>

        <View
          style={{
            marginTop: 60,
            width: width / 1.11,
            height: 280,

            position: 'absolute',
          }}>
          <YoutubePlayer
            borderRadius={30}
            height={400}
            play={playing}
            videoId={'AVAc1gYLZK0'}
            onChangeState={onStateChange}
          />
        </View>
        <View style={{marginTop: 205}}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>
            About This Course
          </Text>
          <Text>
            How to make your design more artful & lyrical How to make your
            design more artful & lyrical How to make your
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginHorizontal: 30,
          marginTop: 340,
          position: 'absolute',
        }}>
        <Text style={{marginRight:200,fontSize:20,fontWeight:'bold',}}>Content</Text>
        <Text style={{fontSize:20,fontWeight:'bold',}}>9 videos</Text>
      </View>
      <ScrollView style={styles.container}>
        {persons.map(person => {
          return (
            <View key={person.id}>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 10,
                  justifyContent: 'flex-start',
                  padding: 7,
                  borderRadius: 15,
                  borderWidth: 1,
                  marginVertical: 5,
                  borderColor: '#CBD5E1',
                  alignItems: 'center',
                }}>
                <Text>{video}</Text>
                <View>
                <Text style={{marginLeft: 30,fontSize:15,fontWeight:'bold'}}>{person.name}</Text>
                <Text style={{marginLeft: 30}}>5 min</Text>
                </View>
           
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View style={{margin: 17, position: 'relative', marginTop: 245}}>
        <Button title="Add to Course"  />
      </View>
    </SafeAreaView>
  );
};

export default Course;
