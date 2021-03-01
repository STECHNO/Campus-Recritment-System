const INITIAL_STATE = {
    jobs: [],
    students: [],
    
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case "JOBS_LIST":
            return ({
                ...state,
                jobs: action.payload,
            })
    }

    switch (action.type) {
        case "STUDENTS_LIST":
            return ({
                ...state,
                students: action.payload,
            })
    }
    


    return state;

}