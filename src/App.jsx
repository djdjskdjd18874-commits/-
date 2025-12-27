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
  
   
  return<>
  <Nav/>
  
  <Routes>
   <Route index element={<Nelis/> } />
   <Route path='/Nelis' element={<Home />}/>
    <Route path='/Card' element={<Card />}/>
    <Route path='/Accessories' element={<Accessories/>}/>
    <Route path='/ComponCard' element={<ComponCard/>}/>
    
    
 
  </Routes>
   
 
 
 
  
  </>
}

export default App
 


        