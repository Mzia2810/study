import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Course from '../../../screens/course';
import GoTOMyCourse from '../../../screens/course/goToMyCourse';
import Home from '../../../screens/home/Home';
import CourseStack from './courseStack/CourseStack';
import MainCourse from '../../../screens/course/mainCourse/Course';
import BottomTabNavigator from '../../bottomTab/BottomTabNavigation';
import Subjects from '../../../screens/subjects/Subjects';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="BottomTabNavigator">
       <Stack.Screen 
      name="BottomTabNavigator" 
      options={{headerShown:false}}
      component={BottomTabNavigator} 
      />

      <Stack.Screen
        name="Subjects"
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerBackTitle: 'Back',
          headerShadowVisible: false,
        }}
        component={Subjects}
      />
      <Stack.Screen
        name="MainCourse"
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerBackTitle: 'Back',
          headerShadowVisible: false,
        }}
        component={MainCourse}
      />

      <Stack.Screen
        name="Course"
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerBackTitle: 'Back',
          headerShadowVisible: false,
        }}
        component={Course}
      />

      <Stack.Screen
        name="Go to my Course"
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerBackTitle: 'Back',
          headerShadowVisible: false,
        }}
        component={GoTOMyCourse}
      />

      <Stack.Screen
        name="CourseStack"
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerBackTitle: 'Back',
          headerShadowVisible: false,
        }}
        component={CourseStack}
      />
      {/* <Stack.Screen
        name="Go to my Course"
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerBackTitle: 'Back',
          headerShadowVisible: false,
        }}
        component={GoTOMyCourse}
      />
    */}
      {/* <Stack.Screen
        name="Course"
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerBackTitle: 'Back',
          headerShadowVisible: false,
        }}
        component={CourseStack}
      /> */}
    </Stack.Navigator>
  );
};

export default HomeStack;
