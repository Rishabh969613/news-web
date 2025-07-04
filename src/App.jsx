import './App.css'
import Home from './components/home'
import Navbar from './components/Navbar'
import Signup from './components/Signup'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div> 
      
      
     
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Signup' element={<Signup />} />


        </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App
