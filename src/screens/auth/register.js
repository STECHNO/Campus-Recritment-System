import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Item, Input, Label, Icon, Button } from 'native-base';
import { connect } from 'react-redux';
import { signUp } from '../../store/action';
import auth from '@react-native-firebase/auth';
// import DateTimePicker from '@react-native-community/datetimepicker';



function Register(props) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState();
    const [initializing, setInitializing] = useState(true);
    // const [date, setDate] = useState(new Date());
    // const [mode, setMode] = useState('date');
    // const [show, setShow] = useState(false);
    const [newUser, setNewUser] = useState(props.aut.newUser);


    // const onChange = (event, selectedDate) => {
    //     const currentDate = selectedDate || date;
    //     setShow(Platform.OS === 'ios');
    //     setDate(selectedDate);
    // };

    // const showMode = (currentMode) => {
    //     setShow(true);
    //     setMode(currentMode);
    // };

    // const showDatepicker = () => {
    //     showMode('date');
    // };

    const onAuthStateChanged = (user) => {
        if (initializing) setInitializing(false);
        if ((user != null) && (props.aut.profileData.email != '')) {
            if(props.route.params.loginAs.toLowerCase() === 'admin'){
                props.navigation.push('AdminDrawer');
            }
            else if(props.route.params.loginAs.toLowerCase() === 'company'){
                props.navigation.push('CompanyDrawer');
            }
            else if(props.route.params.loginAs.toLowerCase() === 'student'){
                props.navigation.push('StudentDrawer');
            }
        }
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    });

    if (initializing) return null




    // useEffect(() => {
    //     if(props.route.params.loginAs.toLowerCase() === 'admin'){
    //         props.navigation.push('AdminDrawer');
    //     }
    //     else if(props.route.params.loginAs.toLowerCase() === 'company'){
    //         props.navigation.push('CompanyDrawer');
    //     }
    //     else if(props.route.params.loginAs.toLowerCase() === 'student'){
    //         props.navigation.push('StudentDrawer');
    //     }
    // })

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'orange', paddingTop: 80 }} >{props.route.params.loginAs}</Text>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'orange'}} >Register</Text>
                </View>
                
                <View style={{ flex: 3, width: '100%' }}>
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
                        <Input style={styles.inputStyle} value={email} onChangeText={(text) => setEmail(text)} />
                    </Item>
                    <Item floatingLabel style={{ marginBottom: 10 }}>
                        <Label style={styles.labelStyle}>Password</Label>
                        <Input style={styles.inputStyle} secureTextEntry={true} value={password} onChangeText={(pass) => setPassword(pass)} />
                    </Item>
                    <Item floatingLabel style={{ marginBottom: 10 }}>
                        <Label style={styles.labelStyle}>Confirm Password</Label>
                        <Input style={styles.inputStyle} secureTextEntry={true} value={confirmPassword} onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)} />
                        {(password != '') && (password === confirmPassword) && <Icon style={{ fontSize: 20, color: 'orange' }} name='checkmark-circle' />}

                    </Item>
                    <View>
                        <Button bordered style={styles.btnStyle} onPress={() => {
                            if (firstName === '') {
                                alert('enter First Name');
                            }
                            else if (lastName === '') {
                                alert('enter Last Name');
                            }
                            else if (email === '') {
                                alert('enter email');
                            }
                            else if (password === '') {
                                alert('enter password');
                            }
                            else if (confirmPassword === undefined) {
                                alert('enter confirm password');
                            }
                            else if (password !== confirmPassword) {
                                alert('password and confirm password does not match');
                            }
                            else if (email != '' && password === confirmPassword) {
                                props.signUp(email, password, firstName, lastName, props.route.params.loginAs);
                            }
                        }}>
                           <Text style={styles.btnText}>Sign Up</Text>
                            {/* {props.authUser.spinner && (<Spinner style={styles.btnText} color='red' />)} */}
                        </Button>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 7 }} >
                        <View >
                            <Text style={{ color: 'orange', fontSize: 13}} onPress={() => props.navigation.push('Splash')}>I'm already a member</Text>
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
    drop: {
        width: 50,
        height: 70,
    },
    labelStyle: {
        color: 'orange',
        paddingLeft: 5,
        fontFamily: 'Lato-Regular'
    },
    inputStyle: {
        color: 'orange',
        paddingLeft: 5,
        fontFamily: 'Lato-Regular'
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
        fontFamily: 'Lato-Regular',
        color: 'orange',
    }
})

const mapStateToProps = (state) => ({
    aut: state.aut,
})

const mapDispatchToProps = (dispatch) => ({
    signUp: (email, password, firstName, lastName, loginAs) => dispatch(signUp(email, password, firstName, lastName, loginAs)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);