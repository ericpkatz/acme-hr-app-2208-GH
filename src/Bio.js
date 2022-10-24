import { fetchBio } from './store';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const Bio = ()=> {
  const { bios } = useSelector(state => state);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(()=> {
    if(!bios[id]){
      dispatch(fetchBio(id));
    }
  }, [id, bios]);
  return (
    <div>
      { bios[id] }

    </div>
  );
};

export default Bio;
