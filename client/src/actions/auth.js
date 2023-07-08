import * as api from '../api';
import { AUTH } from '../constants/actionTypes.js';

export const signin = (formData, navigate) => async (dispatch) => {
   // Sign In
   
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data})
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const signup = (formData, navigate) => async (dispatch) => {
    //Sign Up
    
    try {
        const { data } = await api.signUp(formData);

        dispatch({type: AUTH, data})

        navigate('/')
    } catch (error) {
        console.log(error)
    }
}