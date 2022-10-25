import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, TouchableOpacity, View} from 'react-native';

// components
import Message from '../../screens/messages/index';
// import Home from '../../screens/home/Home';
import Profile from '../../screens/profile/Profile';
import Assignments from '../../screens/assignments/index';
import HomeStack from '../navigationStack/homeStack/HomeStack';
import Home from '../../screens/home/Home';
//Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useState} from 'react';
import CalendarScreen from '../../components/Calendar';
import List from '../../components/List';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const [isCalendar, setIsCalendar] = useState(false);
  const [isList, setIsList] = useState(false);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#52B6DF"
      inactiveColor="#CBD5E1"
      screenOptions={{
        tabBarActiveTintColor: '#52B6DF',
        tabBarShowLabel: false,
      }}

      // barStyle={{

      //   showLabel: false,
      //   backgroundColor: 'white',
      //   shadowOffset: {
      //     width: 0,
      //     height: 12,
      //   },
      //   shadowOpacity: 1,
      //   shadowRadius: 16.0,
      //   elevation: 24,
      //   borderTopLeftRadius: 21,
      //   borderTopRightRadius: 21,
      //   backgroundColor: '#fff',
      //   position: 'absolute',
      //   bottom: 0,
      //   width: '100%',
      //   height: 30,
      //   zIndex: 0,
      // }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarStyle: {
            height: 50,
          },

          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <FontAwesome name="home" color={color} size={30} />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Assignments"
        component={isCalendar ? CalendarScreen : List}
        options={props => {
          const {navigation, route} = props;
          return {
            headerShown: true,
            headerTitle: '',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="assignment" color={color} size={30} />
            ),
            headerLeft: () => (
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                All Assignments
              </Text>
            ),
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{marginRight: 10, padding: 7, borderRadius: 10}}
                  onPress={() => setIsCalendar(true)}>
                  <AntDesign name="calendar" size={30} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginRight: 10, padding: 7, borderRadius: 10}}
                  onPress={() => setIsCalendar(false)}>
                  <FontAwesome name="list" size={30} />
                </TouchableOpacity>
              </View>
            ),
          };
        }}
      />
      <Tab.Screen
        name="Messages"
        options={{
          headerShown: true,
          tabBarStyle: {
            height: 50,
          },
          tabBarIcon: ({color}) => (
            <MaterialIcons name="message" color={color} size={30} />
          ),
          // headerLeft: () => <Text style={{fontSize:20,color:'black',fontWeight:'bold',marginLeft:10}}>All Assignments</Text>,
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{marginRight: 10, padding: 7, borderRadius: 10}}
                onPress={() => setIsCalendar(true)}>
                <AntDesign name="search1" size={30} />
              </TouchableOpacity>
            </View>
          ),
        }}
        component={Message}
      />
      <Tab.Screen
        name="Profile"
        options={{
          headerShown:false,
          tabBarStyle: {
            height: 50,
          },

          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <FontAwesome name="user" color={color} size={30} />
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
