import React from 'react'
// import Project from './project';
// import ApiProject from './useeffect.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home.js';
import './Home.css';
import { Route,Routes } from 'react-router-dom';
import ApiProject from './useeffect.js';

function App() {
  return (
   
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/useeffect" element={<ApiProject/>}/>
      </Routes>
    
  );
}

export default App;
