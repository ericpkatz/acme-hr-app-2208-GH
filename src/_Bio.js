import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Bio = ()=> {
  const { id } = useParams();
  const [ bio, setBio] = useState('');

  const fetchBio = async(id)=> {
    const response = await axios.get(`/api/employees/${id}`);
    setBio(response.data.bio);
  };

  useEffect(()=> {
    fetchBio(id);
  }, [id]);

  return (
    <div>
      { bio }
    </div>
  );
};

export default Bio;
