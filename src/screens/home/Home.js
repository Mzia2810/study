import {
  View,
  Text,
  TouchableOpacity,
  graphStyle,
  Dimensions,
  chartConfig,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

//components
import {styles} from './styles';
import Button from '../../components/Button';
import Course from '../course';
// firebase
import auth, {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// Icons
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['Economy', 'Geography', 'English', 'Biology'],
  datasets: [
    {
      data: [99, 80, 95, 78],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
    },
  ],
};

const newUser = firebase
  .firestore()
  .collection('newUser')
  .doc(auth().currentUser.uid);

const Home = ({navigation}) => {
  const [userName, setUserName] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    newUser.get().then(documentSnapshot => {
      console.log('User exists: ', documentSnapshot.exists);

      if (documentSnapshot.exists) {
        console.log(documentSnapshot.data());

        const {name} = documentSnapshot.data();
        setUserName(name);
      }
    });
  }, []);

  return (
    <View style={styles.homeContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 15,
        }}>
        <View style={styles.headerSection}>
          <Text style={styles.headingOne}>Hi, {userName}</Text>
          <Text style={{color: '#64748B', fontSize: 15, letterSpacing: 0.3}}>
            Here is Your activity today
          </Text>
        </View>
        <View style={styles.headerSection}>
          <TouchableOpacity style={{marginTop: 10}}>
            <Icon name="bell-o" size={30} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Box area */}
      <View style={styles.boxesContainer}>
        <View style={styles.box}>
          <Text style={styles.presence}>89%</Text>
          <Text style={styles.heading2}>Presence</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.completeness}>100%</Text>
          <Text style={styles.heading2}>Completeness</Text>
        </View>
      </View>
      <View style={styles.boxesContainer}>
        <View style={styles.box}>
          <Text style={styles.assignments}>18%</Text>
          <Text style={styles.heading2}>Assigments</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.totalSubject}>12%</Text>
          <Text style={styles.heading2}>Total Subject</Text>
        </View>
      </View>

      {/* Box area End */}

      {/* Icon area start */}
      <View style={styles.bottomContainer}>
        <View style={styles.bottomIcon}>
          <TouchableOpacity onPress={() => navigation.navigate('MainCourse')}>
            <View style={styles.iconBox}>
              <FontAwesome5
                name="book-open"
                size={35}
                color="white"
                style={{
                  backgroundColor: '#316D86',
                  padding: 11,
                  borderRadius: 20,
                }}
              />
              <Text style={styles.iconText}>Course</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() =>navigation.navigate('Subjects')}>
            <View style={styles.iconBox}>
              <FontAwesome5
                name="graduation-cap"
                size={35}
                color="white"
                style={{
                  backgroundColor: '#27487F',
                  padding: 11,
                  borderRadius: 20,
                }}
              />
              <Text style={styles.iconText}>Subjects</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.iconBox}>
            <FontAwesome
              name="book"
              size={35}
              color="white"
              style={{
                backgroundColor: '#F59E0B',
                padding: 12,
                borderRadius: 20,
              }}
            />
            <Text style={styles.iconText}>Class</Text>
          </View>
          <View style={styles.iconBox}>
            <Ionicons
              name="checkmark-circle-sharp"
              size={35}
              color="white"
              style={{
                backgroundColor: '#46BD84',
                padding: 11,
                borderRadius: 20,
              }}
            />
            <Text style={styles.iconText}>Presence</Text>
          </View>
        </View>
      </View>
      {/* Icon area End */}
      <View
        style={{
          position: 'absolute',
          marginTop: 410,
          marginLeft: 20,
        }}>
        <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black'}}>
          Schedule
        </Text>
      </View>
      {/* BarChart area End */}
      <View style={{position: 'absolute', marginTop: 445}}>
        <BarChart
          // style={graphStyle}
          data={data}
          width={screenWidth}
          height={220}
          style={{
            marginVertical: 5,
            borderRadius: 16,
            marginRight: 10,
          }}
          chartConfig={{
            backgroundGradientFrom: '#FFFFFF',
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: '#08130D',
            backgroundGradientToOpacity: 0,
            color: () => '#64748B',
            strokeWidth: 5, // optional, default 3
            barPercentage: 1,
            decimalPlaces: 1,
            useShadowColorFromDataset: false, // optional
            propsForLabels: {
              fontSize: '15',
              fontWeight: 'bold',
              fontFamily: 'poppins',
            },
            fillShadowGradient: '#000080', // THIS
            fillShadowGradientOpacity: 1, // THIS

            propsForBackgroundLines: {
              strokeWidth: 1,
              stroke: '#e3e3e3',
              strokeDasharray: '0',
            },
          }}
          // verticalLabelRotation={5}

          withHorizontalLabels={true}
          showValuesOnTopOfBars={true}
          horizontalLabelRotation={0}
          withInnerLines={true}
          fromZero={true}
          horizontal={true}
          // withCustomBarColorFromData={true}
          flatColor={true}
          // contentInset={{ top: 10, bottom: 10 }}
          // spacing={3.2}
          // gridMin={0}
          // formatLabel={ (value, index) => index }

          // borderSkipped='top'
        />
      </View>
    </View>
  );
};

export default Home;
