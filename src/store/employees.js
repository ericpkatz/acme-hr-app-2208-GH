import axios from 'axios';
const reducer = (state = [], action)=> {
  if(action.type === 'SET_EMPLOYEES'){
    return action.employees;
  }
  return state;
};

const fetchEmployees = ()=> {
  return async(dispatch)=> {
    const response = await axios.get('/api/employees');
    dispatch({ type: 'SET_EMPLOYEES', employees: response.data });
  };
};

export { fetchEmployees };
export default reducer;
