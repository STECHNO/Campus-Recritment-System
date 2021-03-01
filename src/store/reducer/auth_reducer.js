const INITIAL_STATE = {
    uid: null,
    spinner: false,
    newUser: false,
    fireUser: null,
    profileData: {
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

}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case "USER_CREATED":
            return ({
                ...state,
                newUser: action.payload,
            })
    }

    switch (action.type) {
        case "USER":
            return ({
                ...state,
                uid: action.payload,
            })
    }
    switch (action.type) {
        case "RETRIEVE_USER_DATA":
            return ({
                ...state,
                profileData: action.payload,
            })
    }

    switch (action.type) {
        case "FIREBASE_AUTH_DATA":
            return ({
                ...state,
                fireUser: action.payload,
            })
    }

    return state;
}
