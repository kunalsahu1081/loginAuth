import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserDetails } from './FunctionCall';

function UserDetails({setError}) {

    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        console.log(localStorage.getItem('isLoggedIn'))
        if(!localStorage.getItem('isLoggedIn')) {
            navigate('/sign-in')
        }
    })
    
    useEffect(() => {

        // function call

        getUserDetails(setError, setUser, navigate);
        
    },[])

    function logOut(){
        localStorage.removeItem("token");
        localStorage.setItem('isLoggedIn', false);
        navigate('/sign-in');
    }

  return (
    <div>
        <h4>Name - {user.name}</h4>
        <h4>Email - {user.email}</h4>
        <button className='btn-danger btn' onClick={logOut}>log out</button>
    </div>
  )
}

export default UserDetails