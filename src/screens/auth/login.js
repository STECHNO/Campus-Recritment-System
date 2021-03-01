import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Item, Input, Label, Button } from 'native-base';
import { connect } from 'react-redux';
import { signIn, fireAuth } from '../../store/action';
import auth from '@react-native-firebase/auth';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();



  const { loginAs } = props.route.params;


  const onAuthStateChanged = (user) => {
    if (props.aut.profileData.email == '') {
      setUser(null)
    }
    else if((user != null) && (props.aut.profileData.email != '')) {
      setUser(user);
      if(loginAs.toLowerCase() === 'student'){
        props.navigation.push('StudentDrawer');
      }
      else if(loginAs.toLowerCase() === 'admin'){
        props.navigation.push('AdminDrawer');
      }
      else if(loginAs.toLowerCase() === 'company'){
        props.navigation.push('CompanyDrawer');
      }
    }
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  });

  if (initializing) return null




  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <View style={styles.heading}>
          <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'orange', paddingTop: 100 }} >{loginAs}</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'orange' }}>Login</Text>
        </View>

        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <View style={styles.fieldContainer}>
            <Item floatingLabel style={{ marginBottom: 10 }}>
              <Label style={styles.labelStyle}>Email</Label>
              <Input style={styles.inputStyle} value={email} onChangeText={(text) => setEmail(text)} />
            </Item>
            <Item floatingLabel style={{ marginBottom: 10 }}>
              <Label style={styles.labelStyle}>Password</Label>
              <Input style={styles.inputStyle} secureTextEntry={true} value={password} onChangeText={(pass) => setPassword(pass)} />
            </Item>
          </View>

          <View style={{ width: '100%' }}>
            <View>
              <Button bordered style={styles.btnStyle} onPress={() =>
                props.signIn(email, password, loginAs)
              }>
                <Text style={styles.btnText}>Sign In</Text>
                {/* {props.authUser.spinner && (<Spinner style={styles.btnText} color='red' />)} */}
              </Button>
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 7 }} >
            {/* <View style={{}}>
              <Text style={{ color: 'orange', fontSize: 13,  }}>Forgot Password?</Text>
            </View> */}
            <View style={{}}>
              <Text style={{ color: 'orange', fontSize: 13, }} onPress={() => {
                props.navigation.navigate('Auth', {
                  screen: 'Register',
                  params: { loginAs: loginAs }
                })
              }}>Don't have an account? Sign Up</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 1,
    width: '100%',
    backgroundColor: '#fff'
  },
  heading: {
    flex: 1,
    alignItems: 'center',
  },
  fieldContainer: {
    width: '100%',
    height: 'auto',
    marginBottom: 10,
  },
  labelStyle: {
    color: 'orange',
    paddingLeft: 5,
  },
  inputStyle: {
    color: 'orange',
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
  }
})

const mapStateToProps = (state) => ({
  aut: state.aut
})

const mapDispatchToProps = (dispatch) => ({
  signIn: (email, password, loginAs) => dispatch(signIn(email, password, loginAs)),
  fireAuth: (fireUser) => dispatch(fireAuth(fireUser)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);