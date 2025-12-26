import { useState } from 'react'

import './App.css'
import Nav from './componets/Nav'
import Nelis from './pages/Nelis'
import Home from './pages/Home'
import Card from './pages/Card'
import { Route, Routes } from 'react-router'
import Accessories from './pages/Accessories'
import ComponCard from './pages/ComponCard'







function App() {
  
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
       setCart((prev) => [...prev, product]);
       };

  return<>
  <Nav/>
  
  <Routes>
   <Route index element={<Home/> } />
   <Route path='/Nelis' element={<Nelis/>}/>
    <Route path='/Card' element={<Card />}/>
    <Route path='/Accessories' element={<Accessories/>}/>
    <Route path='/ComponCard' element={<ComponCard/>}/>
    
    
 
  </Routes>
   
 
 
 
  
  </>
}

export default App
 


        