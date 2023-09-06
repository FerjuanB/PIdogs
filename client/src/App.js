import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import {useState, useEffect} from "react";
import axios from 'axios'

import navB from './components/Navb/navB'
import { LandingPage, Home, Detail, Form } from './views';
function App() {
 const location = useLocation()
  return (
    <div>
         <div>
         {location.pathname !== "/" && <navB />}
         </div>          <h1>Henry Dogs babe</h1>
  <Routes>
    <Route exact path='/' element={<LandingPage/>}/>
    <Route exact path='/home' element={<Home onSearch/>}/>
    <Route exact path="/detail" element ={<Detail />}/>
    <Route exact path='/create' element = {<Form   />}/>
  </Routes>
    </div>
  );
}

export default App;
