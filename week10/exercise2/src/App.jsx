import { useState } from 'react'
import './App.css'
import {NavLink, Routes, Route} from 'react-router-dom';
import {Home} from './Home.jsx';
import { Song } from './Song.jsx';
import musicData from './music-list.json';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/******  Routes ******/}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path=":slug" element={<Song data={musicData}/>}></Route>
      </Routes>
    </>
  )
}

export default App
