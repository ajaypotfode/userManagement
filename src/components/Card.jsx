import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserCard = () => {
  const [data, setData] = useState([])
  const {id}=useParams()

  useEffect(() => {
   (async () => {
      try {
        const res = await axios.get(`http://localhost:5000/users/${id}`);
        setData(res.data);
      } catch (err) {
        console.log('Error fetching data:', err);
      }
    })()
  }, [id])
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
  <div className="card" style={{ width: '24rem' }}>
    <div className="card-body">
      <h5 className="card-title">User Details</h5>
      <p className="card-text">
        <span className='d-inline-block text-danger fw-bold'>Name:</span> {data.name}
      </p>
      <p className="card-text">
        <span className='d-inline-block text-danger fw-bold'>Email:</span> {data.email}
      </p>
      <p className="card-text">
        <span className='d-inline-block text-danger fw-bold'>Contact:</span> {data.contact}
      </p>
      <div className="d-flex justify-content-between mt-4">
        <Link to={'/updateUser/' + id} className="btn btn-primary">Edit</Link>
        <Link to={'/'} className="btn btn-secondary">Back</Link>
      </div>
    </div>
  </div>
</div>

  );
};

export default UserCard;
