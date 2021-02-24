import axios from "axios";
import { APPLY_EDUCATIONLOAN } from "./types";

const BASE_URL = "http://localhost:9002/api/eloan"

export const applyEducationLoan = educationLoanObj => {
    return (dispatch) => {
        axios.post(BASE_URL, educationLoanObj)
            .then(response => {
                console.log(response.data);
                dispatch({
                    type: APPLY_EDUCATIONLOAN,
                    payload: response.data
                })
            })
            .catch(error => {
                console.log(error);
            });
    }
}