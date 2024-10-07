import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const AddUser = () => {
 const navigate=useNavigate()
  const [values, setValues]=useState({
    name:'',
    email:'',
    contact:''
  })
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {  
      const response = await axios.post('http://localhost:5000/users', values);
      console.log(response.data);
      navigate('/');
    } catch (err) {
      console.log('Error occurred:', err);
    }
  };
  
    
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="card p-4" style={{ width: '24rem' }}>
      <h1 className="text-center mb-4">Add User</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            placeholder="Enter name" 
            onChange={e => setValues({ ...values, name: e.target.value })} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            placeholder="Enter email" 
            onChange={e => setValues({ ...values, email: e.target.value })} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact</label>
          <input 
            type="text" 
            className="form-control" 
            id="contact" 
            placeholder="Enter contact" 
            onChange={e => setValues({ ...values, contact: e.target.value })} 
          />
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to={'/'} className="btn btn-secondary">Back</Link>
        </div>
      </form>
    </div>
  </div>
  
  );
};

export default AddUser;
