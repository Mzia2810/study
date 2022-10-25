import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Home from '../../../screens/home/Home';
import Course from '../../../../screens/course';
import GoTOMyCourse from '../../../../screens/course/goToMyCourse';
import MainCourse from '../../../../screens/course/mainCourse/Course';

const Stack = createNativeStackNavigator();

const CourseStack = () => {
  return (
    <Stack.Navigator initialRouteName="Course">
      
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
    </Stack.Navigator>
  );
};

export default CourseStack;
