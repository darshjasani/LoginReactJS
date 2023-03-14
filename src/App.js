import React, { useState } from 'react'

const App = ()=>{

  const [details,setDetails] = useState({
    name:'',
    password:'',
    email:'',
    phone_number:''
  })

  const callName = (event)=>{
    setDetails((preValue)=>{
      return({
        name:event.target.value,
        password:preValue.password,
        email:preValue.email,
        phone_number:preValue.phone_number
      });
    })
  }

  const callPwd = (event)=>{
    setDetails((preValue)=>{
      return({
        name:preValue.name,
        password:event.target.value,
        email:preValue.email,
        phone_number:preValue.phone_number
      });
    })
  }

  const callEmail = (event)=>{
    setDetails((preValue)=>{
      return({
        name:preValue.name,
        password:preValue.password,
        email:event.target.value,
        phone_number:preValue.phone_number
      });
    })
  }

  const callPhno = (event)=>{
    setDetails((preValue)=>{
      return({
        name:preValue.name,
        password:preValue.password,
        email:preValue.email,
        phone_number:event.target.value
      });
    })
  }

  

  const submitClicked = (event)=>{
    event.preventDefault();
    console.log(details)
  }

  return(
    <>
      <form onSubmit={submitClicked}>
        <h1>Login Form {details.name}</h1>
        <input
          type='text'
          placeholder='Enter your Name'
          name='name'
          onChange={callName}
        />
        <br/>
        <input
          type='password'
          placeholder='Enter your Password'
          name='pwd'
          onChange={callPwd}
        />
        <br/>
        <input
          type='email'
          placeholder='Enter your Email'
          name='email'
          onChange={callEmail}
        />
        <br/>
        <input
          type='number'
          placeholder='Enter your Phone Number'
          name='phno'
          onChange={callPhno}
        />
        <br/>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

export default App;