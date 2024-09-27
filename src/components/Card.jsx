import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserCard = () => {
  const [data, setData] = useState([])
  const {id}=useParams()

  useEffect(() => {
    axios.get('http://localhost:5000/users/'+id)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="card" style={{ width: '24rem' }}>
      <div className="card-body">
        <h5 className="card-title">User Details</h5>
        <p className="card-text"><p className='d-inline-block text-danger fw-bold'>Name:</p>{data.name} </p>
        <p className="card-text"><p className='d-inline-block text-danger fw-bold'>Email:</p>{data.email}</p>
        <p className="card-text"><p className='d-inline-block text-danger fw-bold'>Contact:</p>{data.contact}</p>
        <div className="d-flex justify-content-between mt-4 ">
            <Link to={'/updateUser/'+id} type="submit" className="btn btn-primary">Edit</Link>
            <Link to={'/'} type="button" className="btn btn-secondary">Back</Link>
          </div>
      </div>
    </div>
  </div>
  );
};

export default UserCard;
