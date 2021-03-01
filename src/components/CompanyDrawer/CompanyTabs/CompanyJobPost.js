import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet, Alert } from 'react-native';
import { Item, Input, Label, Textarea, Text, Button } from 'native-base';
import { connect } from 'react-redux';
import { postJob } from '../../../store/action';



const CompanyJobPost = (props) => {
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [email, setEmail] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [qualification, setQualification] = useState('');
  const [salary, setSalary] = useState('');
  const [experience, setExperience] = useState('');
  const [contactNumber, setContactNumber] = useState('');


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView persistentScrollbar={true} >
        <View>
          <View style={styles.profileDetailsCon}>
            <View style={{}}>
              <View style={{alignItems: 'center', marginTop: 10}}>
                <Text style={{fontSize: 30, color: 'orange', fontWeight: 'bold'}} >Job Form</Text>
              </View>
              <View style={{ width: '100%', marginTop: 40 }}>
                <Item floatingLabel style={{ marginBottom: 10 }}>
                  <Label style={styles.labelStyle}>Company Name</Label>
                  <Input style={styles.inputStyle} value={companyName} onChangeText={(text) => setCompanyName(text)} />
                </Item>
                <Item floatingLabel style={{ marginBottom: 10 }}>
                  <Label style={styles.labelStyle}>Job Title</Label>
                  <Input style={styles.inputStyle} value={jobTitle} onChangeText={(text) => setJobTitle(text)} />
                </Item>
                <Item floatingLabel style={{ marginBottom: 10 }}>
                  <Label style={styles.labelStyle}>Company Email</Label>
                  <Input style={styles.inputStyle} value={email} onChangeText={(text) => setEmail(text)} />
                </Item>
                <Item floatingLabel style={{ marginBottom: 10 }}>
                  <Label style={styles.labelStyle}>Contact Number</Label>
                  <Input style={styles.inputStyle} value={contactNumber} onChangeText={(num) => setContactNumber(num)} />
                </Item>
                <Item floatingLabel style={{ marginBottom: 10 }}>
                  <Label style={styles.labelStyle}>Qualification Required</Label>
                  <Input style={styles.inputStyle} value={qualification} onChangeText={(txt) => setQualification(txt)} />
                </Item>
                <Item floatingLabel style={{ marginBottom: 10 }}>
                  <Label style={styles.labelStyle}>Experience</Label>
                  <Input style={styles.inputStyle} value={experience} onChangeText={(txt) => setExperience(txt)} />
                </Item>
                <Item floatingLabel style={{ marginBottom: 10 }}>
                  <Label style={styles.labelStyle}>Salary Range</Label>
                  <Input style={styles.inputStyle} value={salary} onChangeText={(txt) => setSalary(txt)} />
                </Item>
                <View style={{ marginTop: 2, marginBottom: 10 }}>
                  <Label style={styles.labelStyle} >Job Description</Label>
                  <Textarea style={{ paddingLeft: 8, fontSize: 18, color: 'black' }} rowSpan={5} underline={true} placeholderTextColor='black' placeholder="Enter Your Address" value={jobDescription} onChangeText={(text) => setJobDescription(text)} />
                </View>
                <View>
                  <Button bordered style={styles.btnStyle} onPress={() => {
                    if((companyName == '') || (email == '') || (contactNumber == '') || (qualification == '') || (experience == '') || (salary == '') || (jobDescription == '') || (jobTitle == '')){
                      alert('Field can not be empty')
                    }
                    else{
                      props.postJob({
                        companyName: companyName,
                        jobTitle: jobTitle,
                        email: email,
                        qualification: qualification,
                        contactNumber: contactNumber,
                        experience: experience,
                        salary: salary,
                        jobDescription: jobDescription,
                      })
                      alert('Congratulations job has been posted')
                    }
                    
                    

                    setCompanyName(''),
                    setJobTitle(''),
                    setEmail(''),
                    setEmail(''),
                    setContactNumber(''),
                    setQualification(''),
                    setExperience(''),
                    setSalary(''),
                    setJobDescription()
                  }}>
                    <Text style={styles.btnText}>Post Job</Text>
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
    padding: 10,
    marginTop: 30,
    flex: 3,
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width: '100%'
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
  postJob: (data) => dispatch(postJob(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CompanyJobPost);
