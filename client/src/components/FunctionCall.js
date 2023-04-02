import axios from 'axios'

export function submitData(e, fname, lname, email, password, setError, navigate){
    e.preventDefault();
      if(email==='' || password === ''){
        setError('enter email or password')
        navigate('/error');
        return;
      }
      axios.post("http://localhost:5000/register", {
          fname,
          lname,
          email,
          password,
        })
      .catch((err) => {
        setError(err);
        navigate('/error');
      })
}


export function getToken(e, email, password, setError, navigate){
    e.preventDefault();
      if(email==='' || password === ''){
        setError('enter email or password')
        navigate('/error');
        return;
      }
      axios.post("http://localhost:5000/login", {
          email,
          password,
        })
      .then((response) => {
        if(response.data.status === 'ok'){
          localStorage.setItem("token" , response.data.data)
          localStorage.setItem('isLoggedIn', true);
          navigate('/user');
        }
      })
      .catch((err) => {
        setError(err);
        navigate('/error');
      })
}

export function getUserDetails(setError, setUser, navigate){
    const token = localStorage.getItem("token");
        if(!localStorage.getItem('isLoggedIn')) return;
        axios.post("http://localhost:5000/user", {
                token
             })
        .then((response) => {
            setUser({
                name :`${response.data.data.fname} ${response.data.data.lname}`,
                email : `${response.data.data.email}`
            });
        })
        .catch((error) => {
            setError(error);
            navigate('/error');
        })
}