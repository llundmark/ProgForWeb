import { useState } from 'react'
import './App.css'
import {NavLink, Routes, Route} from 'react-router-dom';
import {Home} from './views/Home';
import { Alpacas } from './views/Alpacas';
import { Llamas } from './views/Llamas';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    {/** Navigation **/}
    <nav>
    <NavLink to="/" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }>Home</NavLink> | 
    <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }to="/llamas">Llamas</NavLink> | 
    <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }to="/alpacas">Alpacas</NavLink>

    </nav>
    {/*****  Routes  **********/}
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/llamas" element={<Llamas />}/>
      <Route path="/alpacas" element={<Alpacas />}/>
    </Routes>

   </div>
  )
}

export default App
