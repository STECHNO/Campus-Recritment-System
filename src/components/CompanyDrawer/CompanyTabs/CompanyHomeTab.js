import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Spinner } from 'native-base';
import { connect } from 'react-redux';
import { getJobs, getStudents } from '../../../store/action';
// import auth from '@react-native-firebase/auth';



const CompanyHomeTab = (props) => {

  // let {firstName, lastName, bloodGroup} = props.authUser.profileData;


  // useEffect(() => {
  //   // console.log('homeTab', props.authUser.profileData)
  //   if (props.authUser.user == null) {
  //     props.navigation.push('Auth');
  //   }
  //   else{
  //     props.getProfileData(props.authUser.user)
  //   }
  // }, []);

  // useEffect(() => {
  //   console.log('homeTab', props.authUser.profileData)
  //   if (props.aut.profileData.email == '') {
  //     props.navigation.push('Splash');
  //   }
  //   // else{
  //     // props.getProfileData(props.aut.profileData.uid)
  //     console.log(props.aut.profileData)
  //   }
  // );


  useEffect(() => {
    props.getStudents();
    props.getJobs();
  }, [])



  return (
    <View style={styles.mainContainer}>
      <View style={styles.welcome}>
        <Text style={{ color: 'black', fontSize: 20 }}>Company Dashboard</Text>

        {props.aut.profileData.firstName != '' && (
          <View>
            <Text style={{ color: 'black', marginTop: 10 }}>Welcome: {`${props.aut.profileData.firstName} ${props.aut.profileData.lastName}`}</Text>
          </View>
        )}
        {props.aut.profileData.firstName === '' && (<Spinner style={styles.btnText} color='#fff' />)}

      </View>


      <View style={styles.cardsContainer}>
        <Text style={{ fontSize: 18, marginTop: 10, color: 'black' }} >Total Number of Students:</Text>
        {(props.app.students.length != 0) && (<Text style={{ fontSize: 35, fontWeight: 'bold', color: 'green' }} >{props.app.students.length}</Text>)}
        {(props.app.students.length === 0) && (<Text style={{ fontSize: 35, fontWeight: 'bold', color: 'green' }} >0</Text>)}
      </View>

      <View style={styles.cardsContainer}>
        <Text style={{ fontSize: 18, marginTop: 10, color: 'black' }} >Total Number of Jobs Available:</Text>
        {(props.app.jobs.length != 0) && (<Text style={{ fontSize: 35, fontWeight: 'bold', color: 'green' }} >{props.app.jobs.length}</Text>)}
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center'
  },
  welcome: {
    width: '85%',
    height: 80,
    marginTop: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardsContainer: {
    backgroundColor: 'orange',
    width: '85%',
    height: 100,
    marginTop: 50,
    alignItems: 'center'
  },
  cards: {
    marginTop: 30,
    height: 100,
    width: 'auto',
    borderWidth: 1,
    borderColor: 'orange',
    borderBottomEndRadius: 10,
    borderTopStartRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    color: '#B30E05',
  },
  btn: {
    marginTop: 10,
    width: '100%',
    height: 40,
    backgroundColor: '#B30E05',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  btnText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  }
})

const mapStateToProps = (state) => ({
  aut: state.aut,
  app: state.app,
})

const mapDispatchToProps = (dispatch) => ({
  getProfileData: (uid) => dispatch(getProfileData(uid)),
  getJobs: () => dispatch(getJobs()),
  getStudents: () => dispatch(getStudents()),
  signOut: () => dispatch(signOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CompanyHomeTab);