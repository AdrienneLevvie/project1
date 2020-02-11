const patient_data = (state = [], action) => {
    switch(action.type){
        case 'PASS_DATA':
            return state = action.patient_data
        default: 
            return state
    }
}

export default patient_data;