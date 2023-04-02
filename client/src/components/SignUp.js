import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {submitData} from './FunctionCall'

export default function SignUp({setError}) {

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleSubmit(e) {

    // function call

    submitData(e, fname, lname, email, password, setError, navigate);

  }

  useEffect(() => {
      const isLoggedIn = localStorage.getItem('isLoggedIn')
      if(isLoggedIn =='true') {
        navigate('/user');
      }
  })
  

    return (
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input type="text" className="form-control" placeholder="First name" onChange={e => setFname(e.target.value)}/>
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" onChange={e => setLname(e.target.value)}/>
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)}/>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-success">
            Sign Up
          </button>
        </div>
        <p className="sm-text text-right">
          Already registered <Link to="/sign-in">sign in?</Link>
        </p>
      </form>
    )
}
