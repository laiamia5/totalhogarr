import './App.css';
import Nav from './components/Nav'
import Servicio from './components/Servicio';
import Admin from './components/Admin'
import {Routes, Route} from "react-router-dom"
import Home from './components/Home';
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { TodosLosProductos } from './redux/actions';
import Login from './components/Login';
import Profile from './components/Profile'
import {useLocation} from 'react-router-dom'


function App() {
  const dispatch = useDispatch()
  let location = useLocation()
  const productos = useSelector(state => state.todos)

  useEffect(() => {
      dispatch(TodosLosProductos())
      console.log(productos)
  }, [])

  return (
    <div className="App">
      {location.pathname !== "/login" && <Nav/>}
      <Routes>
        <Route path='/servicio-tecnico' element={<Servicio/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
