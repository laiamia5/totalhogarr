import './App.css';
import Nav from './components/Nav'
import Admin from './components/admin/Admin'
import {Routes, Route} from "react-router-dom"
import Home from './components/Home';
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { TodosLosProductos } from './redux/actions';
import Login from './components/session/Login';
import Profile from './components/session/Profile'
import {useLocation} from 'react-router-dom'
import Carrito from './components/Carrito'
import InicioSesion from './components/session/InicioSesion';
import Detalle from './components/Detalle'


function App() {
  const dispatch = useDispatch()
  let location = useLocation()
  const productos = useSelector(state => state.todos)
  const carr= useSelector(state => state.carrito)
  localStorage.setItem("carrito", carr)

  useEffect(() => {
      dispatch(TodosLosProductos())
  }, [])

  return (
  
  <div className="App" style={{backgroundColor: 'rgba(231, 231, 231, 0.719)', height: '100vh'}}>
      {location.pathname !== "/inicio-sesion" && <Nav/>}
      <Routes>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/carrito' element={<Carrito/>}/>
        <Route path='/detalle/:prodId' element={<Detalle/>}/>
        <Route path='/inicio-sesion' element={<InicioSesion/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
