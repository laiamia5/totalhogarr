import './App.css';
import Nav from './components/Nav'
import Servicio from './components/Servicio';
import Admin from './components/Admin'
import {Routes, Route} from "react-router-dom"
import Home from './components/Home';
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { TodosLosProductos } from './redux/actions';

function App() {
  const dispatch = useDispatch()
  const productos = useSelector(state => state.todos)

  useEffect(() => {
      dispatch(TodosLosProductos())
      console.log(productos)
  }, [])

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/servicio-tecnico' element={<Servicio/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
