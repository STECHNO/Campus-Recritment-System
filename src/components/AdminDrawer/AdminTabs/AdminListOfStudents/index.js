import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet, Linking, Modal, Alert } from 'react-native';
import { Icon, Item, Input, Text, Card, CardItem, Body, Spinner, Button } from 'native-base';
import { Label, Textarea, ListItem, Radio, Right, Left, } from 'native-base';
import { connect } from 'react-redux';
import { getStudents, updateProfileData, removeStudent } from '../../../../store/action';

const AdminListOfStudents = (props) => {
    const [toggleCards, setToggleCards] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [male, setMale] = useState();
    const [female, setFemale] = useState();
    const [gender, setGender] = useState()
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [mobileNumber, setMobileNumber] = useState();
    const [address, setAddress] = useState();
    const [qualification, setQualification] = useState();
    const [marks, setMarks] = useState();
    const [experience, setExperience] = useState();
    const [type, setType] = useState();
    const [password, setPassword] = useState();
    const [uid, setUid] = useState();




    useEffect(() => {
        setToggleCards(true);
        props.getStudents();
    })


    return (
        <SafeAreaView style={{ flex: 1, width: '100%', }}>
            <ScrollView persistentScrollbar={true} >
                <View style={styles.mainContainer}>
                    {toggleCards === true && (
                        <View style={styles.cardStyle}>
                            {(props.app.students.length == 0) ? (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Spinner style={{ fontSize: 50 }} color='orange' /></View>)
                                :
                                (props.app.students.map((value, item) => {
                                    return (
                                        <View>
                                            <Card key={item}>
                                                <CardItem style={styles.cardBorder}>
                                                    <Body>
                                                        <View style={{ flex: 1, alignItems: 'center' }}>
                                                            <Text style={{ fontWeight: 'bold', fontSize: 20, paddingBottom: 15, color: 'gray' }} >{`${value.firstName} ${value.lastName}'s`} Resume</Text>
                                                        </View>
                                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                                            <Text style={styles.cardTextStyle} >Name:</Text>
                                                            <Text style={styles.textStyleSub} >{`${value.firstName} ${value.lastName}`}</Text>
                                                        </View>
                                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                                            <Text style={styles.cardTextStyle} >Email: </Text>
                                                            <Text style={styles.textStyleSub} >{value.email}</Text>
                                                        </View>
                                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                                            <Text style={styles.cardTextStyle} >Contact Number: </Text>
                                                            <Text style={styles.textStyleSub} >{value.mobileNumber}</Text>
                                                        </View>
                                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                                            <Text style={styles.cardTextStyle} >Address: </Text>
                                                            <Text style={styles.textStyleSub} >{value.address}</Text>
                                                        </View>
                                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                                            <Text style={styles.cardTextStyle} >Gender: </Text>
                                                            <Text style={styles.textStyleSub} >{value.gender}</Text>
                                                        </View>
                                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                                            <Text style={styles.cardTextStyle} >Experience: </Text>
                                                            <Text style={styles.textStyleSub} >{value.experience}</Text>
                                                        </View>
                                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                                            <Text style={styles.cardTextStyle} >Qualification: </Text>
                                                            <Text style={styles.textStyleSub} >{value.qualification}</Text>
                                                        </View>
                                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                                            <Text style={styles.cardTextStyle} >Marks: </Text>
                                                            <Text style={styles.textStyleSub} >{value.marks}</Text>
                                                        </View>
                                                        <View style={{ flex: 1, flexDirection: 'row' }} >
                                                            <Button bordered style={styles.btn} onPress={() =>
                                                                Linking.openURL(`mailto:${value.email}?subject=Hello&body=Description....`)}
                                                                title={value.email} >
                                                                <Text style={styles.btnText}>Contact Student By Email</Text>
                                                            </Button>
                                                        </View>
                                                        <View style={{ flex: 1, flexDirection: 'row' }} >
                                                            <Button bordered style={styles.btn} onPress={() => {
                                                                    setFirstName(value.firstName),
                                                                    setLastName(value.lastName),
                                                                    setEmail(value.email),
                                                                    setMobileNumber(value.mobileNumber),
                                                                    setQualification(value.qualification),
                                                                    setMarks(value.marks),
                                                                    setExperience(value.experience),
                                                                    setMale(value.gender === 'Male'),
                                                                    setFemale(value.gender === 'Female'),
                                                                    setGender(value.gender),
                                                                    setAddress(value.address),
                                                                    setType(value.type),
                                                                    setUid(value.uid),
                                                                    setPassword(value.password),
                                                                    setModalVisible(true)
                                                            }}>
                                                                <Text style={styles.btnText}>Edit Student Details</Text>
                                                            </Button>
                                                        </View>
                                                        <View style={{ flex: 1, flexDirection: 'row' }} >
                                                            <Button bordered style={styles.btn} onPress={() => props.removeStudent(value.uid) } >
                                                                <Text style={styles.btnText}>Remove Student</Text>
                                                            </Button>
                                                        </View>
                                                    </Body>
                                                </CardItem>
                                            </Card>

                                            <SafeAreaView>
                                                <ScrollView persistentScrollbar={true} >
                                                    <Modal
                                                        animationType="slide"
                                                        transparent={true}
                                                        visible={modalVisible}
                                                        onRequestClose={() => {
                                                            Alert.alert("Modal has been closed.");
                                                            setModalVisible(!modalVisible);
                                                        }}>
                                                        <View style={styles.centeredView}>
                                                            <View style={styles.modalView}>
                                                                <View style={{}}>
                                                                    <View style={{}}>
                                                                        <View style={{}}>
                                                                            <View style={{}}>
                                                                            </View>
                                                                            <View style={{ marginTop: 15, }}>
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
                                                                                <Item floatingLabel style={{ marginBottom: 10 }}>
                                                                                    <Label style={styles.labelStyle}>Address</Label>
                                                                                    <Input style={styles.inputStyle} value={address} onChangeText={(txt) =>  setAddress(text)} />
                                                                                </Item>
                                                                                <View style={{ flexDirection: 'row' }} >
                                                                                    <Button bordered style={styles.btnStyle} onPress={() => {
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
                                                                                            password: password,
                                                                                            uid: uid,
                                                                                            type: type,
                                                                                        })
                                                                                        {
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
                                                                                                                props.navigation.replace('AdminDrawer');
                                                                                                            },
                                                                                                        },
                                                                                                    ],
                                                                                                    { cancelable: false },
                                                                                                )
                                                                                        }
                                                                                    }}>
                                                                                        <Text style={styles.btnText}>Edit Student Profile</Text>
                                                                                    </Button>
                                                                                    <Button bordered style={styles.btnStyle} >
                                                                                        <Text style={styles.btnText} onPress={() =>
                                                                                            setModalVisible(!modalVisible)
                                                                                        } >Cancel</Text>
                                                                                    </Button>
                                                                                </View>
                                                                            </View>
                                                                        </View>
                                                                    </View>
                                                                </View>

                                                            </View>
                                                        </View>
                                                    </Modal>
                                                </ScrollView>
                                            </SafeAreaView>
                                        </View>
                                    )
                                }))}
                        </View>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    profileHeaderLine: {
        height: 2,
        marginHorizontal: 5,
        backgroundColor: '#e2e2e2',
        marginTop: 13,
    },
    cardStyle: {
        flex: 1,
        width: '90%',
        margin: 10,
    },
    cardBorder: {
        borderBottomColor: 'gray',
        borderTopColor: 'gray',
        borderRightColor: 'gray',
        borderLeftColor: 'gray',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
    },
    cardTextStyle: {
        fontSize: 14,
        color: 'orange',
        flex: 1,
        fontWeight: '700',
        marginBottom: 3,
    },
    textStyleSub: {
        fontSize: 14,
        color: 'black',
        flex: 1,
        fontWeight: '100',
    },
    btn: {
        marginTop: 10,
        width: '100%',
        height: 'auto',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    btnText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'gray',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%'
    },
    modalView: {
        width: '100%',
        backgroundColor: "white",
        paddingLeft: 15,
        paddingRight: 15,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    labelStyle: {
        color: 'orange',
        paddingLeft: 5,
    },
    inputStyle: {
        color: 'black',
        paddingLeft: 5,
    },
    btnStyle: {
        marginTop: 10,
        height: 40,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        marginLeft: 15,
        marginBottom: 10
    },
})

const mapStateToProps = (state) => ({
    aut: state.aut,
    app: state.app,
})

const mapDispatchToProps = (dispatch) => ({
    getStudents: () => dispatch(getStudents()),
    updateProfileData: (data) => dispatch(updateProfileData(data)),
    removeStudent: (data) => dispatch(removeStudent(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminListOfStudents);
