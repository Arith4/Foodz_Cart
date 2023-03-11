import './App.css';
import React from 'react';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screens/Login';
import SignUp from './screens/SignUp';


function App() {
  return (
  <Router>
   <div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/loginUser' element={<Login />} />
      <Route path='/createUser' element={<SignUp />} />
    </Routes>
   </div>
   </Router>
  );
}

export default App;
