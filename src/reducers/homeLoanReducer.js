const homeLoanReducer = ( state = {}, action ) => {
    switch(action.type){
        case "APPLY_HOMELOAN":
            const homeLoan = state.homeLoan.concat(action.payload);
            console.log("from reducer" + homeLoan);
            return {...state, homeLoan: action.payload};
        case "GET_HOMELOAN":
            return {...state, homeLoan: action.payload};
        default: 
            return state;
    }

}

export default homeLoanReducer;