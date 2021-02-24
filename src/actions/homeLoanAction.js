import axios from "axios";
import { APPLY_HOMELOAN } from "./types";

const BASE_URL = "http://localhost:9002/api/hloan"

export const applyHomeLoan = homeLoanObj => {
    return (dispatch) => {
        axios.post(BASE_URL, homeLoanObj)
            .then(response => {
                console.log(response.data);
                dispatch({
                    type: APPLY_HOMELOAN,
                    payload: response.data
                })
            })
            .catch(error => {
                console.log(error);
            });
    }
}