
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserCard from './components/Card';
import AddUser from './components/Create';
import UpdateUser from './components/Edit';
import './components/style.css'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use 'react-router-dom' instead of 'react-router'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/addUser' element={<AddUser/>}/>
    <Route path='/updateUser/:id' element={<UpdateUser/>}/>
    <Route path='/card/:id' element={<UserCard/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
