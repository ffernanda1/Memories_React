import * as api from '../api'

// Action Creators

const getPosts = () => async (dispatch) => {
    try {
       const {data} = await api.fetchPosts();

       dispatch({type: 'FETCH_ALL', payload: data});
        
    } catch (error) {
        
    }
    const action = {type: 'FETCH_ALL', payload:[]}

        dispatch(action); 
}