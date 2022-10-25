import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
// import moment from 'moment';
// moment().format();
const {width, height} = Dimensions.get('window');
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig,
} from 'react-native-calendars';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
  ],
  monthNamesShort: [
    'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
  ],
  dayNames: [  'Mon', 
              'Tue', 
              'Wed', 
              'Thur', 
              'Fri', 
              'Sat', 
              'Sun'],
  dayNamesShort: [  'Mon', 
              'Tue', 
              'Wed', 
              'Thur', 
              'Fri', 
              'Sat', 
              'Sun'],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = 'fr';

const CalendarScreen = () => {
  const [day, setDay] = useState(new Date());
  const [month, setMonth] = useState(new Date());
  const [year, setYear] = useState(new Date());
  const [isClicked, setIsClicked] = useState(false);

  
  return (
    <View style={{flex: 1}}>
      <View>
        <Calendar
       
         onDayPress={day => {
           // console.log('selected month :', day.month);
           // console.log('selected year :', day.year);
           setDay(day.dateString)
           setMonth(day.dateString);
           console.log('selected cLISTED This date :', day.dateString);
        }}
    
          minDate={'2001-01-01'}
        
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: 'green',
            selectedDayTextColor: 'red',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: '#00adf5',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: '#00adf5',
            indicatorColor: '#00adf5',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16
          }}
          // markingType={'custom'}
          // markedDates={{
          //   '2022-10-15': {selected: true, marked: true, selectedColor: 'blue'},
          // }}
        />
        <ScrollView>
          <View
            style={{
              borderRadius: 20,
              backgroundColor: '#FFFF',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
              height: height,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 20,
                borderBottomWidth: 1,
                borderColor: '#CBD5E1',
              }}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    width: 45,
                    height: 45,
                    backgroundColor: 'green',
                    padding: 10,
                    borderRadius: 20,
                    // flexDirection: 'row',
                  }}>
                  <FontAwesome5 name="book" color="white" size={25} />
                </View>
                <View style={styles.titleBox}>
                  <Text style={styles.title}>Doing personal tasks</Text>
                  <View style={styles.date}>
                    <FontAwesome5
                      name="calendar-alt"
                      style={{marginTop: 3}}
                      color="#64748B"
                      size={15}
                    />
                    <Text style={styles.lesson}>12/08/2021</Text>
                  </View>
                </View>
              </View>

              <View>
                <Text style={{fontSize: 17, fontWeight: '500'}}>3 Days</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 15,
                borderBottomWidth: 1,
                borderColor: '#CBD5E1',
              }}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    width: 45,
                    height: 45,
                    backgroundColor: '#86242E',
                    padding: 10,
                    borderRadius: 20,
                    // flexDirection: 'row',
                  }}>
                  <MaterialCommunityIcons
                    name="square-root"
                    color="white"
                    size={25}
                  />
                </View>
                <View style={styles.titleBox}>
                  <Text style={styles.title}>Doing personal tasks</Text>
                  <View style={styles.date}>
                    <FontAwesome5
                      name="calendar-alt"
                      style={{marginTop: 3}}
                      color="#64748B"
                      size={15}
                    />
                    <Text style={styles.lesson}>12/08/2021</Text>
                  </View>
                </View>
              </View>

              <View>
                <Text style={{fontSize: 17, fontWeight: '500'}}>3 Days</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 20,
                borderBottomWidth: 1,
                borderColor: '#CBD5E1',
              }}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    width: 45,
                    height: 45,
                    backgroundColor: '#F59E0B',
                    padding: 10,
                    borderRadius: 20,
                    // flexDirection: 'row',
                  }}>
                  <AntDesign name="barschart" color="white" size={25} />
                </View>
                <View style={styles.titleBox}>
                  <Text style={styles.title}>Doing personal tasks</Text>
                  <View style={styles.date}>
                    <FontAwesome5
                      name="calendar-alt"
                      style={{marginTop: 3}}
                      color="#64748B"
                      size={15}
                    />
                    <Text style={styles.lesson}>12/08/2021</Text>
                  </View>
                </View>
              </View>

              <View>
                <Text style={{fontSize: 17, fontWeight: '500'}}>3 Days</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
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
