import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from '../subjects/styles';

const Subjects = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.iconMainContainer}>
        <TouchableOpacity>
          <View style={styles.iconBox}>
            <Image
              source={require('../../assets/subjects/math.png')}
              style={styles.bgImage}
            />
            <MaterialCommunityIcons
              name="square-root"
              size={40}
              color="#86242E"
              style={styles.icon}
            />
        
            <Text style={styles.iconText}>Math</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.iconBox}>
            <Image
              source={require('../../assets/subjects/physic.png')}
              style={styles.bgImage}
            />
            <MaterialCommunityIcons
              name="checkbox-blank-off"
              size={40}
              color="#B45309"
              style={styles.icon}
            />
            <Text style={styles.iconText}>Physics</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.iconBox}>
            <Image
              source={require('../../assets/subjects/arts.png')}
              style={styles.bgImage}
            />
            <FontAwesome5
              name="palette"
              size={40}
              color="#27487F"
              style={styles.icon}
            />
            <Text style={styles.iconText}>Arts</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.iconMainContainer}>
        <TouchableOpacity>
          <View style={styles.iconBox}>
            <Image
              source={require('../../assets/subjects/biology.png')}
              style={styles.bgImage}
            />
            <Ionicons
              name="md-eyedrop-sharp"
              size={40}
              color="#46BD84"
              style={styles.icon}
            />
            <Text style={styles.iconText}>Biology</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.iconBox}>
            <Image
              source={require('../../assets/subjects/technology.png')}
              style={styles.bgImage}
            />
            <Ionicons
              name="md-desktop"
              size={40}
              color="#2A714F"
              style={styles.icon}
            />
            <Text style={styles.iconText}>Technology</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.iconBox}>
            <Image
              source={require('../../assets/subjects/economy.png')}
              style={styles.bgImage}
            />
            <AntDesign
              name="barschart"
              size={40}
              color="#F59E0B"
              style={styles.icon}
            />
            <Text style={styles.iconText}>Economy</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.iconMainContainer}>
        <TouchableOpacity>
          <View style={styles.iconBox}>
            <Image
              source={require('../../assets/subjects/english.png')}
              style={styles.bgImage}
            />
            <FontAwesome5
              name="book-open"
              size={40}
              color="#4178D4"
              style={styles.icon}
            />
            <Text style={styles.iconText}>English</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.iconBox}>
            <Image
              source={require('../../assets/subjects/geography.png')}
              style={styles.bgImage}
            />
            <Fontisto
              name="pie-chart-1"
              size={40}
              color="#64748B"
              style={styles.icon}
            />
            <Text style={styles.iconText}>Geography</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.iconBox}>
            <Image
              source={require('../../assets/subjects/chemical.png')}
              style={styles.bgImage}
            />
            <MaterialCommunityIcons
              name="bottle-tonic-plus"
              size={40}
              color="#52B6DF"
              style={styles.icon}
            />
            <Text style={styles.iconText}>Chemical</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Subjects;
