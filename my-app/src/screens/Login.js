import React from 'react'
import { useState} from 'react';
import { Link, useNavigate  } from 'react-router-dom'

export default function Login() {
  
  const[credentials, setCredentials] = useState({email:"",password:""});

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/loginUser", {
          method: 'POST',
          headers: {
              'Content-type': 'application/json'
          },
          body: JSON.stringify({ email:credentials.email, password:credentials.password })
      })

      const json = await response.json();
      console.log(json)

      if(!json.success){
          alert("Enter valid credentials");
      }

      if(json.success){
        navigate("/",{ replace: true });
      }
  }

  const onChange = async (event) => {
      setCredentials({...credentials, [event.target.name] : event.target.value})
  }

  return (
    <>
          <div className="container">
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="m-2 btn btn-primary">Submit</button>
  <Link to="/createUser" className="btn btn-primary">I'm a new User</Link>

</form>
</div>
    </>
  )
}
