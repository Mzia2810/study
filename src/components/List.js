import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const {width, height} = Dimensions.get('window');

const List = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFF'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginTop: 15,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Today's</Text>
        <View style={{flexDirection: 'row'}}>
          <AntDesign name="filter" size={30} color="#64748B" />
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Filter</Text>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#FFFF',
            // flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginTop: 10,
            borderWidth: 1, borderColor: '#CBD5E1',
            height: height / 5,
            borderRadius: 15,
          }}>
          <View style={{borderBottomWidth: 1, borderBottomColor: '#CBD5E1', flexDirection:'row'}}>
            <View
              style={{
                width: 55,
                height: 55,
                backgroundColor: '#46BD84',
                padding: 15,
                borderRadius: 30,
                borderBottomWidth: 1,
                borderColor: '#CBD5E1',
                // flexDirection: 'row',
                marginBottom: 10,
                marginLeft: 15,
                marginTop: 7,
               
              }}>
              <FontAwesome5 name="book" color="white" size={25} />
            </View>
            <Text style={styles.subjectName}>Biology</Text>
          </View>
          <View style={styles.titleBox}>
            <View>
              <Text style={styles.title}>Doing personal tasks</Text>
              <Text
                style={{fontSize: 17, fontWeight: 'bold', color: '#64748B'}}>
                3 Day's
              </Text>
            </View>
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
        <View
          style={{
            backgroundColor: '#FFFF',
            // flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginTop: 10,
            borderWidth: 1, borderColor: '#CBD5E1',
            height: height / 5,
            borderRadius: 15,
          }}>
          <View style={{borderBottomWidth: 1, borderBottomColor: '#CBD5E1',flexDirection:'row'}}>
            <View
              style={{
                width: 55,
                height: 55,
                backgroundColor: '#86242E',
                padding: 15,
                borderRadius: 30,
                borderBottomWidth: 1,
                borderColor: '#CBD5E1',
                // flexDirection: 'row',
                marginBottom: 10,
                marginLeft: 15,
                marginTop: 7,
              }}>
              <FontAwesome5 name="book" color="white" size={25} />
            </View>
            <Text style={styles.subjectName}>Mathematics</Text>
          </View>
          <View style={styles.titleBox}>
            <View>
              <Text style={styles.title}>Doing personal tasks</Text>
              <Text
                style={{fontSize: 17, fontWeight: 'bold', color: '#64748B'}}>
                3 Day's
              </Text>
            </View>
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
        <View
          style={{
            backgroundColor: '#FFFF',
            // flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginTop: 10,
            borderWidth: 1, borderColor: '#CBD5E1',
            height: height / 5,
            borderRadius: 15,
          }}>
          <View style={{borderBottomWidth: 1, borderBottomColor: '#CBD5E1',flexDirection:'row'}}>
            <View
              style={{
                width: 55,
                height: 55,
                backgroundColor: '#F59E0B',
                padding: 15,
                borderRadius: 30,
                borderBottomWidth:1,
                borderColor: '#CBD5E1',
                // flexDirection: 'row',
                marginBottom: 10,
                marginLeft: 15,
                marginTop: 7,
              }}>
              <FontAwesome5 name="book" color="white" size={25} />
            </View>
            <Text style={styles.subjectName}>Economy</Text>
          </View>
          <View style={styles.titleBox}>
            <View>
              <Text style={styles.title}>Doing personal tasks</Text>
              <Text
                style={{fontSize: 17, fontWeight: 'bold', color: '#64748B'}}>
                3 Day's
              </Text>
            </View>
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
        <View
          style={{
            backgroundColor: '#FFFF',
            // flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginTop: 10,
            borderWidth: 1, borderColor: '#CBD5E1',
            height: height / 5,
            borderRadius: 15,
          }}>
          <View style={{borderBottomWidth: 1, borderBottomColor: '#CBD5E1',flexDirection:'row'}}>
            <View
              style={{
                width: 55,
                height: 55,
                backgroundColor: 'green',
                padding: 15,
                borderRadius: 30,
                borderBottomWidth: 1,
                borderColor: '#CBD5E1',
                // flexDirection: 'row',
                marginBottom: 10,
                marginLeft: 15,
                marginTop: 7,
              }}>
              <FontAwesome5 name="book" color="white" size={25} />
            </View>
            <Text style={styles.subjectName}>Biology</Text>
          </View>
          <View style={styles.titleBox}>
            <View>
              <Text style={styles.title}>Doing personal tasks</Text>
              <Text
                style={{fontSize: 17, fontWeight: 'bold', color: '#64748B'}}>
                3 Day's
              </Text>
            </View>
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
      </ScrollView>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  // titleContainer: {
  //   flexDirection: 'column',
  //   justifyContent: 'flex-start',
  //   borderRadius: 15,

  //   alignItems: 'center',
  //   // marginTop: 15,
  // },

  titleBox: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    marginTop: 80,
    marginLeft: 15,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#334155',
  },
  subjectName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#334155',
    marginTop:20,
    marginLeft:10
  },
  date: {
    marginLeft: 60,
    flexDirection: 'row',
    // marginTop: 10,
    // marginRight: 120,
  },

  lesson: {fontSize: 15, fontWeight: 'bold', color: '#64748B'},
});
