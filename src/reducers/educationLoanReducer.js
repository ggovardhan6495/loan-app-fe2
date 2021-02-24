const educationLoanReducer = (state = {}, action) =>{
    switch(action.type){
        case "APPLY_EDUCATIONLOAN":
            const educationLoan = state.educationLoan.concat(action.payload);
            console.log("From EducationLoan" + educationLoan);
            return {...state, educationLoan: action.payload};
        case "GET_EDUCATIONLOAN":
            return {...state, educationLoan: action.payload};
        default:
            return state;
    }
}
export default educationLoanReducer;