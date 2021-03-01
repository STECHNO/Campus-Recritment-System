import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Alert, Modal } from 'react-native';
import { Icon, Item, Input, Label, Textarea, ListItem, Text, Radio, Right, Left, Button } from 'native-base';
import { connect } from 'react-redux';
import { getProfileData, updateProfileData } from '../../../../store/action';
import auth from '@react-native-firebase/auth';
import { Thumbnail } from 'native-base';



const StudentResume = (props) => {
  const [male, setMale] = useState(props.aut.profileData.gender === 'Male');
  const [female, setFemale] = useState(props.aut.profileData.gender === 'Female');
  const [gender, setGender] = useState(props.aut.profileData.gender)
  const [firstName, setFirstName] = useState(props.aut.profileData.firstName);
  const [lastName, setLastName] = useState(props.aut.profileData.lastName);
  const [email, setEmail] = useState(props.aut.profileData.email);
  const [mobileNumber, setMobileNumber] = useState(props.aut.profileData.mobileNumber);
  const [address, setAddress] = useState(props.aut.profileData.address);
  const [qualification, setQualification] = useState(props.aut.profileData.qualification);
  const [marks, setMarks] = useState(props.aut.profileData.marks);
  const [experience, setExperience] = useState(props.aut.profileData.experience);
  const [btnStatus, setBtnStatus] = useState((firstName != '') && (lastName != '') && (email != '') && (mobileNumber != '') && (qualification != '') && (marks != '')  && (experience != '') && (address != '') && (gender != ''));


  //   useEffect(() => {
  //     if (props.authUser.profileData.uri != null) {
  //       setUri(props.authUser.profileData.uri);
  //     }
  //     if (props.authUser.user != null) {
  //       props.getProfileData(props.aut.profileData.uid, props.aut.profileData.type);
  //     }
  //   }, []);


  return (

    // {(firstName != '') && (lastName != '') && (email != '') && (mobileNumber != '') && (qualification != '') && (marks != '')  && (experience != '') && (address != '') && (gender != '') && (setBtnStatus(true))}

    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView persistentScrollbar={true} >
        <View style={{ padding: 16 }}>
          <View style={styles.profileDetailsCon}>
            <View style={{}}>
              <View style={{}}>
              </View>
              <View style={{ width: '100%' }}>
                <Item floatingLabel style={{ marginBottom: 10 }}>
                  <Label style={styles.labelStyle}>First Name</Label>
                  <Input style={styles.inputStyle} value={firstName} onChangeText={(text) => setFirstName(text)} />
                </Item>
                <Item floatingLabel style={{ marginBottom: 10 }}>
                  <Label style={styles.labelStyle}>Last Name</Label>
                  <Input style={styles.inputStyle} value={lastName} onChangeText={(text) => setLastName(text)} />
                </Item>
                <Item floatingLabel style={{ marginBottom: 10 }}>
                  <Label style={styles.labelStyle}>Email</Label>
                  <Input style={styles.inputStyle} disabled value={email} onChangeText={(text) => setEmail(text)} />
                </Item>
                <Item floatingLabel style={{ marginBottom: 10 }}>
                  <Label style={styles.labelStyle}>Mobile number</Label>
                  <Input style={styles.inputStyle} value={mobileNumber} onChangeText={(num) => setMobileNumber(num)} />
                </Item>
                <Item floatingLabel style={{ marginBottom: 10 }}>
                  <Label style={styles.labelStyle}>Qualification</Label>
                  <Input style={styles.inputStyle} value={qualification} onChangeText={(txt) => setQualification(txt)} />
                </Item>
                <Item floatingLabel style={{ marginBottom: 10 }}>
                  <Label style={styles.labelStyle}>Marks / CGPA</Label>
                  <Input style={styles.inputStyle} value={marks} onChangeText={(txt) => setMarks(txt)} />
                </Item>
                <Item floatingLabel style={{ marginBottom: 10 }}>
                  <Label style={styles.labelStyle}>Experience</Label>
                  <Input style={styles.inputStyle} value={experience} onChangeText={(txt) => setExperience(txt)} />
                </Item>
                <View style={{ marginBottom: 12, borderBottomColor: '#f2f2f2', borderBottomWidth: 2 }}>
                  <Label style={styles.labelStyle}>Gender</Label>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                      <ListItem style={{ marginLeft: 7 }} selected={male ? true : false}>
                        <Left >
                          <Text style={{ color: 'orange' }}>Male</Text>
                        </Left>
                        <Right>
                          <Radio color={"orange"} selectedColor={"blue"} selected={male} onPress={() => {
                            setMale(true);
                            setFemale(false);
                            setGender('Male');
                          }} />
                        </Right>
                      </ListItem>
                    </View>
                    <View style={{ flex: 1 }}>
                      <ListItem selected={female ? true : false}>
                        <Left>
                          <Text style={{ color: 'orange' }}>Female</Text>
                        </Left>
                        <Right>
                          <Radio color={"orange"} selectedColor={"blue"} selected={female} onPress={() => {
                            setMale(false);
                            setFemale(true);
                            setGender('Female');
                          }} />
                        </Right>
                      </ListItem>
                    </View>
                  </View>
                </View>
                <View style={{ marginTop: 2, marginBottom: 10 }}>
                  <Label style={styles.labelStyle} >Address</Label>
                  <Textarea style={{ paddingLeft: 8, fontSize: 18, color: 'black' }} rowSpan={5} underline={true} placeholderTextColor='black' placeholder="Enter Your Address" value={address} onChangeText={(text) => setAddress(text)} />
                </View>
                <View>
                  <Button disabled={btnStatus} bordered style={styles.btnStyle} onPress={() => {
                    props.updateProfileData({
                      firstName: firstName,
                      lastName: lastName,
                      email: email,
                      qualification: qualification,
                      mobileNumber: mobileNumber,
                      experience: experience,
                      marks: marks,
                      gender: gender,
                      address: address,
                      password: props.aut.profileData.password,
                      uid: props.aut.profileData.uid,
                      type: props.aut.profileData.type,
                    })
                    {
                      props.app.profileUpdateSuccess && (
                        Alert.alert(
                          'Congratulations!',
                          'Your profile has been updated',
                          [
                            {
                              text: 'Edit',
                              onPress: () => {
                                return null;
                              },
                            },
                            {
                              text: 'Go to Home',
                              onPress: () => {
                                props.navigation.replace('StudentDrawer');
                              },
                            },
                          ],
                          { cancelable: false },
                        )
                      )
                    }
                  }}>
                    <Text style={styles.btnText}>Update Profile</Text>
                  </Button>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileSnapCon: {
    flex: 1,
    marginBottom: 4,
    padding: 15
  },
  profileDetailsCon: {
    flex: 3,
  },
  icon: {
    backgroundColor: '#C333',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 90,
    height: 90,
  },
  labelStyle: {
    color: 'black',
    paddingLeft: 5,
  },
  inputStyle: {
    color: 'black',
    paddingLeft: 5,
  },
  btnStyle: {
    marginTop: 10,
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  btnText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'orange',
  },
  mapSnap: {
    height: 140,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width: '100%'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  }
})

const mapStateToProps = (state) => ({
  app: state.app,
  aut: state.aut,
})

const mapDispatchToProps = (dispatch) => ({
  getProfileData: (id, type) => dispatch(getProfileData(id, type)),
  updateProfileData: (data) => dispatch(updateProfileData(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentResume);
