import React from 'react'
import SigninPage from './components/SigninPage'
import Signup from './components/Signup'
import "./App.css"
import { Routes, Route,NavLink } from 'react-router'
const App = () => {
  return (
    <div>
               

          

               <NavLink to="/signup">Signup</NavLink>
                
               <NavLink to="/signin">Signin</NavLink>
     
      <Routes>

        <Route path="/signup" element={  <Signup />}></Route>
        <Route path='/signin' element={   <SigninPage />}></Route>
      </Routes>
     


  
    
      {/* Add other routes here */}
    </div>
  )
}

export default App