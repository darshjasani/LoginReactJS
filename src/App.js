import React, { useState } from 'react'
import './App.css'
const App = ()=>{

  const [details,setDetails] = useState({
    name:'',
    password:'',
    email:'',
    phone_number:''
  })

  const inputChange = (event)=>{
    const {value,name} = event.target;
    setDetails((preValue)=>{
        return({
          ...preValue,
          [name] : value
        })

      // if(name === 'name' ){
      //   return({
      //     name:event.target.value,
      //     password:preValue.password,
      //     email:preValue.email,
      //     phone_number:preValue.phone_number
      //   });
      // }
      // else if(name === 'pwd'){
      //   return({
      //     name:preValue.name,
      //     password:event.target.value,
      //     email:preValue.email,
      //     phone_number:preValue.phone_number
      //   });
      // }
      // else if(name === 'email'){
      //   return({
      //     name:preValue.name,
      //     password:preValue.password,
      //     email:event.target.value,
      //     phone_number:preValue.phone_number
      //   });
      // }
      // else if(name === 'phno'){
      //   return({
      //     name:preValue.name,
      //     password:preValue.password,
      //     email:preValue.email,
      //     phone_number:event.target.value
      //   });
      // }
    })
  }
  // const callName = (event)=>{
  //   setDetails((preValue)=>{
  //     return({
  //       name:event.target.value,
  //       password:preValue.password,
  //       email:preValue.email,
  //       phone_number:preValue.phone_number
  //     });
  //   })
  // }

  // const callPwd = (event)=>{
  //   setDetails((preValue)=>{
  //     return({
  //       name:preValue.name,
  //       password:event.target.value,
  //       email:preValue.email,
  //       phone_number:preValue.phone_number
  //     });
  //   })
  // }

  // const callEmail = (event)=>{
  //   setDetails((preValue)=>{
  //     return({
  //       name:preValue.name,
  //       password:preValue.password,
  //       email:event.target.value,
  //       phone_number:preValue.phone_number
  //     });
  //   })
  // }

  // const callPhno = (event)=>{
  //   setDetails((preValue)=>{
  //     return({
  //       name:preValue.name,
  //       password:preValue.password,
  //       email:preValue.email,
  //       phone_number:event.target.value
  //     });
  //   })
  // }

  

  const submitClicked = (event)=>{
    event.preventDefault();
    alert(details.email);
  }

  return(
    <>
      <form onSubmit={submitClicked}>
        <h1>Login Form {details.name}</h1>
        <input
          type='text'
          placeholder='Enter your Name'
          name='name'
          onChange={inputChange}
        />
        <br/>
        <input
          type='password'
          placeholder='Enter your Password'
          name='pwd'
          onChange={inputChange}
        />
        <br/>
        <input
          type='email'
          placeholder='Enter your Email'
          name='email'
          onChange={inputChange}
        />
        <br/>
        <input
          type='number'
          placeholder='Enter your Phone Number'
          name='phno'
          onChange={inputChange}
        />
        <br/>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

export default App;