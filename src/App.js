import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployees } from './store';
import { Link } from 'react-router-dom';

const App = ()=> {
  const { employees } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(fetchEmployees());
  }, []);
  return (
    <div>
      <h1><Link to='/'>Acme HR</Link></h1>
      <ul>
        {
          employees.map( employee => {
            return (
              <li key={ employee.id }>
                <Link to={`/employees/${employee.id}`}>{ employee.name }</Link>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default App;
