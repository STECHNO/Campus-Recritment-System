import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Icon, Item, Input, Text, Card, CardItem, Body, Spinner } from 'native-base';
import { connect } from 'react-redux';
import { getJobs } from '../../../store/action';

const CompanyJobs = (props) => {
    const [toggleCards, setToggleCards] = useState(false);



    useEffect(() => {
        setToggleCards(true);
        props.getJobs();
    }, [])


    return (
        <SafeAreaView style={{ flex: 1, width: '100%', }}>
            <ScrollView persistentScrollbar={true} >
                <View style={styles.mainContainer}>

                    {toggleCards === true && (
                        <View style={styles.cardStyle}>
                            {(props.app.jobs.length == 0) ? (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Spinner style={{ fontSize: 50 }} color='orange' /></View>)
                                :
                                (props.app.jobs.map((value, item) => {
                                    return (
                                        <Card key={item}>
                                            <CardItem style={styles.cardBorder}>
                                                <Body>
                                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                                        <Text style={styles.textStyle} >Job Title:</Text>
                                                        <Text style={styles.textStyleSub} >{value.jobTitle}</Text>
                                                    </View>
                                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                                        <Text style={styles.textStyle} >Qualification: </Text>
                                                        <Text style={styles.textStyleSub} >{value.qualification}</Text>
                                                    </View>
                                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                                        <Text style={styles.textStyle} >Experience: </Text>
                                                        <Text style={styles.textStyleSub} >{value.experience}</Text>
                                                    </View>
                                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                                        <Text style={styles.textStyle} >Salary: </Text>
                                                        <Text style={styles.textStyleSub} >{value.salary}</Text>
                                                    </View>
                                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                                        <Text style={styles.textStyle} >Email: </Text>
                                                        <Text style={styles.textStyleSub} >{value.email}</Text>
                                                    </View>
                                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                                        <Text style={styles.textStyle} >Contact Number: </Text>
                                                        <Text style={styles.textStyleSub} >{value.contactNumber}</Text>
                                                    </View>
                                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                                        <Text style={styles.textStyle} >Company Name: </Text>
                                                        <Text style={styles.textStyleSub} >{value.companyName}</Text>
                                                    </View>
                                                    <View  style={{ flex: 1, flexDirection: 'row' }}>
                                                        <Text style={styles.textStyle} >Job Description: </Text>
                                                    </View>
                                                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 15 }}>
                                                        <Text style={styles.textStyleSub} >{value.jobDescription}</Text>
                                                    </View>
                                                </Body>
                                            </CardItem>
                                        </Card>
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
        borderBottomColor: 'green',
        borderTopColor: 'green',
        borderRightColor: 'green',
        borderLeftColor: 'green',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
    },
    textStyle: {
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: 'orange',
        flex: 1,
        fontWeight: '700',
        marginBottom: 5,
    },
    textStyleSub: {
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: 'black',
        flex: 1,
        fontWeight: '100',
    },
    drop: {
        width: 50,
        height: 70,
    },
    btn: {
        marginTop: 10,
        width: '100%',
        height: 'auto',
        backgroundColor: '#C34632',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    btnText: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Lato-Regular',
        color: '#fff',
    }
})

const mapStateToProps = (state) => ({
    aut: state.aut,
    app: state.app,
})

const mapDispatchToProps = (dispatch) => ({
    getJobs: () => dispatch(getJobs()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CompanyJobs);
