import React from 'react'
import Navbar from './Navbar/Navbar'
import Notification from './Notification/Notification'
import Home from "./Home/Home"
import { BrowserRouter as Router ,Routes, Route  } from 'react-router-dom'
import Profile from './profile/Profile'
function App() {
  return (
    <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/notification' element={<Notification/>}></Route>
                <Route path='/user' element={<Profile/>}></Route>
                <Route path='/' element={<Home/>}></Route>
            </Routes>
        </Router>
        
    </div>
  )
}

export default App