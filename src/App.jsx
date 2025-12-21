import { useState } from 'react'

import './App.css'
import Nav from './componets/Nav'
import Nelis from './pages/Nelis'
import Home from './pages/Home'
import Card from './pages/Card'
import { Route, Routes } from 'react-router'
import Accessories from './pages/Accessories'





function App() {
  const [count, setCount] = useState(0)

  return<>
  <Nav/>
  
  <Routes>
   <Route index element={<Home/> } />
   <Route path='/Nelis' element={<Nelis/>}/>
    <Route path='/Card' element={<Card/>}/>
    <Route path='/Accessories' element={<Accessories/>}/>
 
  </Routes>
   
 
 
 
  
  </>
}

export default App
 


        