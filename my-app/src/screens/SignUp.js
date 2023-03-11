import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export default function SignUp() {

    const[credentials, setCredentials] = useState({name:"",email:"",password:"",location:""})

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createUser", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password, location:credentials.location})
        })

        const json = await response.json();
        console.log(json)

        if(!json.success){
            alert("Enter valid credentials");
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
    <label htmlFor="exampleInputName1" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} id="exampleInputName" aria-describedby="nameHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputAddress1" className="form-label">Address</label>
    <input type="text" className="form-control" name='location' value={credentials.location} onChange={onChange} id="exampleInputAddress1"/>
  </div>
  <button type="submit" className="m-2 btn btn-primary">Submit</button>
  <Link to="/loginUser" className="btn btn-primary">Already a User?</Link>
</form>
</div>
    </>
  )
}
