import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://usermanagement-eg8m.onrender.com/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleDelete=(id)=>{
    const confirm= window.confirm("would you like to delete?")
       if (confirm) {     
        axios.delete('https://usermanagement-eg8m.onrender.com/users/'+id)
       .then(res=>{
        alert("user Deleted Successfully")
           window.location.reload()
       })
       .catch(err=>console.log(err)
       )
       }
  }

  return (
    <div className="container mt-5 border p-4 d-flex flex-column">
    <div className="w-100 d-flex justify-content-end">
      <Link to={'/addUser'} className="btn btn-success btn-sm mx-1" >Add +</Link>
    </div>
    <h1 className="mb-4 text-center">Users List</h1>
    <div className="table-responsive">
      <table className="table table-striped table-bordered text-center">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.contact}</td>
                <td>
                  <Link  to={`/updateUser/${d.id}`} className="btn btn-primary btn-sm mx-1">Edit</Link >
                  <Link to={`/card/${d.id}`} className="btn btn-success btn-sm mx-1">View</Link>
                  <button 
                    onClick={() => handleDelete(d.id)} 
                    className="btn btn-danger btn-sm mx-1">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  </div>
    
  );
}

export default Home;
