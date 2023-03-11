import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Foodz Cart</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/loginUser">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/createUser">SignUp</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
