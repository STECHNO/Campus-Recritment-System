import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';


const signIn = (email, password, loginAs) => {
    return (dispatch) => {
        if (email === '') {
            alert('enter email');
        }
        else if (password === '') {
            alert('enter password');
        }
        else {
            dispatch({
                type: 'SPINNER',
                payload: true,
            });
            auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    console.log('Signed in!');
                    auth().onAuthStateChanged(user => {
                        if (user) {
                            console.log('sign in auth user', user._user.uid)
                            dispatch({
                                type: 'USER',
                                payload: user._user.uid,
                            })

                            database().ref(`${loginAs.toLowerCase()}/${user._user.uid}`).on('value', snapshot => {
                                console.log(snapshot.val())
                                dispatch({
                                    type: 'RETRIEVE_USER_DATA',
                                    payload: snapshot.val(),
                                })
                            })
                        }
                    })
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                        alert('That email address is already in use! \n Please Enter Another Email');
                        dispatch({
                            type: 'SPINNER',
                            payload: false,
                        });
                    }
                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                        alert('That email address is invalid! \n Please Enter Another Email');
                        dispatch({
                            type: 'SPINNER',
                            payload: false,
                        });
                    }
                    console.error(error);
                    alert(error);
                    dispatch({
                        type: 'SPINNER',
                        payload: false,
                    });
                });
        }


    }
}

const signUp = (email, password, firstName, lastName, loginAs) => {
    return (dispatch) => {
        dispatch({
            type: 'SPINNER',
            payload: true,
        });
        auth()
            .createUserWithEmailAndPassword(email, password, `${firstName} ${lastName}`)
            .then((result) => {
                result.user.updateProfile({
                    displayName: `${firstName} ${lastName}`
                })
                console.log('User account created & signed in!');
                // alert("Account created please Sign ")
                dispatch({
                    type: 'USER_CREATED',
                    payload: true,
                })
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                    alert(error.code);
                    dispatch({
                        type: 'SPINNER',
                        payload: false,
                    });
                }
                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                    alert(error.code);
                }
                console.error(error);
            });
        auth().onAuthStateChanged(user => {
            if (user) {
                // dispatch({
                //     type: 'USER',
                //     payload: user._user,
                // })
                // console.log('signup', user._user.uid);
                database().ref('/').child(`${loginAs.toLowerCase()}/${user._user.uid}`).set({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    mobileNumber: '',
                    gender: '',
                    address: '',
                    password: password,
                    uid: user._user.uid,
                    type: loginAs.toLowerCase(),
                    qualification: '',
                    experience: '',
                    marks: ''
                });


                database().ref(`${loginAs.toLowerCase()}/${user._user.uid}`).on('value', snapshot => {
                    console.log(snapshot.val())
                    dispatch({
                        type: 'RETRIEVE_USER_DATA',
                        payload: snapshot.val(),
                    })
                })
            }
        })
    }
}






const signOut = () => {
    return (dispatch) => {
        auth()
            .signOut()
            .then(() =>
                console.log('User signed out!'),
                // dispatch({
                //     type: 'USER',
                //     payload: null,
                // }),
                dispatch({
                    type: 'RETRIEVE_USER_DATA',
                    payload: {
                        address: '',
                        email: '',
                        firstName: '',
                        gender: '',
                        lastName: '',
                        mobileNumber: '',
                        password: '',
                        type: '',
                        uid: '',
                        qualification: '',
                        experience: '',
                        marks: ''
                    },
                })
            );
        dispatch({
            type: 'SPINNER',
            payload: false,
        });
    }
}

const fireAuth = (fireUser) => {
    return (dispatch) => {
        dispatch({
            type: 'FIREBASE_AUTH_DATA',
            payload: fireUser
        })
    }
}


const getProfileData = (id, type) => {
    return (dispatch) => {
        database().ref(`/${type}/${id}`).on('value', snapshot => {
            dispatch({
                type: 'RETRIEVE_PROFILE_DATA',
                payload: snapshot.val(),
            })
        });
    }
}

const updateProfileData = (data) => {
    return (dispatch) => {
        database().ref(`/${data.type}/${data.uid}`).update(data).then(() =>
            dispatch({
                type: 'PROFILE_UPDATE_SUCCESS',
                payload: true,
            }));
    }
}


const postJob = (data) => {
    return (dispatch) => {
        var key = Math.floor(Math.random() * 121321325465401);
        console.log(key)
        database().ref('/').child(`jobs/${key}`).set({
            companyName: data.companyName,
            jobTitle: data.jobTitle,
            email: data.email,
            qualification: data.qualification,
            contactNumber: data.contactNumber,
            experience: data.experience,
            salary: data.salary,
            jobDescription: data.jobDescription,
            key: key,
        });
    }
}


const getJobs = () => {
    return (dispatch) => {
        database().ref('/jobs').on('value', snapshot => {
            let jobsData = snapshot.val();
            let jobs = [];
            for (let item in jobsData) {
                jobs.push({
                    companyName: jobsData[item].companyName,
                    contactNumber: jobsData[item].contactNumber,
                    email: jobsData[item].email,
                    experience: jobsData[item].experience,
                    jobDescription: jobsData[item].jobDescription,
                    jobTitle: jobsData[item].jobTitle,
                    qualification: jobsData[item].qualification,
                    salary: jobsData[item].salary,
                    key: jobsData[item].key,
                });
            }
            dispatch({
                type: 'JOBS_LIST',
                payload: jobs,
            })
        });
    }
}

const getStudents = () => {
    return (dispatch) => {
        database().ref('/student').on('value', snapshot => {
            let studentsData = snapshot.val();
            let students = [];
            for (let item in studentsData) {
                students.push({
                    address: studentsData[item].address,
                    email: studentsData[item].email,
                    firstName: studentsData[item].firstName,
                    gender: studentsData[item].gender,
                    lastName: studentsData[item].lastName,
                    mobileNumber: studentsData[item].mobileNumber,
                    qualification: studentsData[item].qualification,
                    experience: studentsData[item].experience,
                    marks: studentsData[item].marks,
                    uid: studentsData[item].uid,
                    type: studentsData[item].type
                });
            }
            dispatch({
                type: 'STUDENTS_LIST',
                payload: students,
            })
        });
    }
}


const removeStudent = (data) => {
    return (dispatch) => {
        database().ref(`student/${data}`).remove()
    }
}


const removeJob = (key) => {
    return (dispatch) => {
        database().ref(`jobs/${key}`).remove()
    }
}






export {
    signIn,
    signUp,
    signOut,
    fireAuth,
    getProfileData,
    updateProfileData,
    postJob,
    getJobs,
    getStudents,
    removeStudent,
    removeJob,
}