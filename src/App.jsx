import './App.css'
import Home from './components/home'
import Login from './components/Login';
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [category, setCategory] = useState("general");
  return (
    <div>


      <BrowserRouter>
        <Navbar onCategoryChange={setCategory} />
        <Routes>
          <Route path='/' element={<Home category={category} />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
