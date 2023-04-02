import React, {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Login from './components/Login'
import SignUp from './components/SignUp'
import UserDetails from './components/UserDetails'
import ErrorPage from './components/ErrorPage'

function App() {

  const [error, setError] = useState('');
  

  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login setError={setError} />} />
              <Route path="/sign-in" element={<Login setError={setError} />} />
              <Route path="/sign-up" element={<SignUp setError={setError} />} />
              <Route path="/user" element={<UserDetails setError={setError}/>} />
              <Route path='/error' element={<ErrorPage error={error} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
