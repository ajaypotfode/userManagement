import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UpdateUser = () => {
  const navigate = useNavigate()
  // const [data, setData] = useState([])
  const { id } = useParams()

  const [values, setValues] = useState({
    name: '',
    email: '',
    contact: ''
  })

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('http://localhost:5000/users/' + id)
        setValues(res.data)
      } catch (err) {
        console.log('Error fetching data:', err);
      }
    })()
  }, [id])

  const handleUpdate =async (e) => {
    e.preventDefault()
        try {
          const res = await axios.put('http://localhost:5000/users/' + id, values)
          console.log(res.data);

          navigate('/')
        } catch (error) {

        }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: '24rem' }}>
        <h1 className="text-center mb-4">Add User</h1>
        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name"
              placeholder="Enter name"
              value={values.name}
              onChange={e => setValues({ ...values, name: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email"
              placeholder="Enter email"
              value={values.email}
              onChange={e => setValues({ ...values, email: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact</label>
            <input type="text" className="form-control" id="contact"
              placeholder="Enter contact"
              value={values.contact}
              onChange={e => setValues({ ...values, contact: e.target.value })} />
          </div>
          <div className="d-flex justify-content-between mt-4 ">
            <button type="submit" className="btn btn-primary">Update</button>
            <Link to={'/'} type="button" className="btn btn-secondary">Back</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
