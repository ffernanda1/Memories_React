import * as api from '../api';
import { AUTH } from '../constants/actionTypes.js';

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = formData

        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = formData

        navigate('/')
    } catch (error) {
        console.log(error)
    }
}