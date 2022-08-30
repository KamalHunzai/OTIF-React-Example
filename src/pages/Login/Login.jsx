import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Login.css";
function Login() {
  let navigate = useNavigate();
    let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
    let [error, setError] = useState('');

    if (localStorage.getItem("client_secret")) {
        navigate("/search");
    }
  function login(event) {
      event.preventDefault();
    axios({
      method: "post", url: "https://otif-server-dot-otif-mx.UC.r.appspot.com/access/signin", data: {
        username,
        password
      }
    }).then((response) => {
        console.log(response.status);
        console.log(response.data);
        if (response.data.username) {
            localStorage.setItem("client_secret", response.data.client_secret);
        navigate('/search');
      }
      else {
          setError("email or passwor is not valid!")
      }
    }).catch((err) => {
        alert(err);
    });

  }
  return (
      <div className='login__container'>
          <form className='login__form'>
        <h1>Login</h1>
              <label className='form__input' htmlFor='User Name'>User Name<input type="text" id='username' name='username' value={username} onChange={(event) => setUsername(event.target.value)} /></label>
        <label className='form__input' htmlFor='Password'>Password<input type="password" id='password' name='password' value={password} onChange={(event) => setPassword(event.target.value)} /></label>
        {
          error ? <p className='alert__box'>{error}</p> : <p></p>
        }
              <button className='login__btn' onClick={login}>Login</button>
          </form>
    </div>
  )
}

export default Login