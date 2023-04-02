import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPage({error}) {

  const navigate = useNavigate();
  
  function handleClick(){
    navigate(-1);
  }

  return (
    <div>
      <div>
       <p>{error ? `${error.response ? error.response.data : error}` : 'noerror'} </p> 
      </div>
      <button className='btn m-5 btn-success' onClick={handleClick}>go back</button>
    </div>
  )
}

export default ErrorPage