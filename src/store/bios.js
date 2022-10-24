import axios from 'axios';

const bios = (state = {}, action)=> {
  if(action.type === 'SET_BIO'){
    /*
    state = {...state };
    state[action.id] = action.bio;
    */
    state = {...state, [action.id]: action.bio};
  }
  return state;
};

export const fetchBio = (id)=> {
  return async(dispatch)=> {
    const response = await axios.get(`/api/employees/${id}`);
    dispatch({ type: 'SET_BIO', id, bio: response.data.bio });
  };
};

export default bios;
