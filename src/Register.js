import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../src/css/Register.css'
import { Link } from 'react-router-dom';
const Register = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    setTimeout(function () {
      setMsg('')
    }, 15000)
  }, [msg])

  const handleInputChange = (e, type) => {
    switch (type) {
      case 'user':
        setError('');
        setUser(e.target.value);
        if (e.target.value === '') {
          setError('User Name has left Blank');
        }
        break;
      case 'email':
        setError('');
        setEmail(e.target.value);
        if (e.target.value === '') {
          setError('Email has left Blank');
        }
        break;
      case 'pass1':
        setError('');
        setPass1(e.target.value);
        if (e.target.value === '') {
          setError('Password has left Blank');
        }
        break;
      case 'pass2':
        setError('');
        setPass2(e.target.value);
        if (e.target.value === '') {
          setError('Confirm Password has left Blank');
        } else if (e.target.value !== pass1) {
          setError('Password Doesn\'t match!!');
        }
        break;
      default:
    }

    // Check password match outside of the switch case
    if (pass1 !== '' && pass2 !== '' && pass1 === pass2) {
      setMsg('All Fields Are Valid');
    }
  };

  function handleSubmit() {
    if (user !== '' && email !== '' && pass1 !== '' && pass2 !== '') {
      var url = 'http://localhost/backend/registration.php';
      var headers = {
        "Accept": "application/json",
        "Content-type": "application/json"
      }
      var Data = {
        user: user,
        email: email,
        pass: pass2,
      }
      fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      })
        .then((response) => response.json())
        .then((response) => {
          setMsg(response[0].result);
        }).catch((err) => {
          setError(err);
          console.log(err);
        });
      setUser('');
      setEmail('');
      setPass1('');
      setPass2('');
    }
    else {
      setError('All fuilds are require ! ')
    }
  }

  function cheakUser() {

    var url = 'http://localhost/backend/cheakuser.php';
    var headers = {
      "Accept": "application/json",
      "Content-type": "application/json"
    }
    var Data = {
      user: user
    }
    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data)
    })
      .then((response) => response.json())
      .then((response) => {
        setError(response[0].result);
      }).catch((err) => {
        setError(err);
        console.log(err);
      });
  }


  function cheakEmail() {

    var url = 'http://localhost/backend/cheakemail.php';
    var headers = {
      "Accept": "application/json",
      "Content-type": "application/json"
    }
    var Data = {
      email: email
    }
    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(Data)
    })
      .then((response) => response.json())
      .then((response) => {
        setError(response[0].result);
      }).catch((err) => {
        setError(err);
        console.log(err);
      });
  }

  function cheakPswword() {
    if (pass1.length < 8) {
      setError('Password is less the 8 characters!!')
    }
  }

  return (
    <>
      <div className='register_component'>
        <div className='form'>
          <p>
            {
              msg !== '' ?
                <span className='success'>{msg}</span> :
                error !== '' ? (typeof error === 'object' ? <span className='error'>{error.message}</span> : <span className='error'>{error}</span>) :
                  null
            }
          </p>
          {console.log(error)}
          <label>Username</label>
          <input
            type='text'
            name='user'
            value={user}
            onBlur={cheakUser}
            onChange={(e) => handleInputChange(e, 'user')} />

          <label>Email</label>
          <input
            type='email'
            name='email'
            value={email}
            onBlur={cheakEmail}
            onChange={(e) => handleInputChange(e, 'email')} />

          <label>Password</label>
          <input
            type='password'
            name='pass1'
            value={pass1}
            onChange={(e) => handleInputChange(e, 'pass1')}
            onBlur={cheakPswword}
          />
          <label>Confirm Password</label>
          <input
            type='Password'
            name='pass2'
            value={pass2}
            onChange={(e) => handleInputChange(e, 'pass2')}
          />
          <label></label>
          <input
            type='submit'
            defaultValue='submit'
            className='button'
            onClick={handleSubmit} />


          <div className='content'>
            <p>already have an account </p>

          </div>
        </div>


      </div>

    </>
  );

};

export default Register;
