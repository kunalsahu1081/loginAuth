import React, { useState, useEffect } from 'react'
import { Link , useNavigate} from 'react-router-dom';
import { getToken } from './FunctionCall';

export default function Login({setError}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleSubmit(e) {

      // function call

      getToken(e, email, password, setError, navigate);
      
    }

  useEffect(() => {
     const isLoggedIn = localStorage.getItem('isLoggedIn');
     if(isLoggedIn == 'true'){
      navigate('/user');
     }
  })
  

    return (
      <form onSubmit = {handleSubmit}>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" onChange = {e => setEmail(e.target.value)}/>
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" onChange = {e => setPassword(e.target.value)}/>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
        <p className="sm-text text-right">
          Not registered? <Link to="/sign-up">Register?</Link>
        </p>
      </form>
    )
}
