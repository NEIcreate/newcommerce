import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './Pages/Auth/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Auth/Login';
import Home from './Pages/Home';

const App = () => {
  return (
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App