import {Routes, Route, useLocation} from 'react-router-dom'


import Navbar from './components/Navb/navB'
import { LandingPage, Home, Detail, Form } from './views';
function App() {
 const location = useLocation()
  return (
    <div>
         <div>
         {location.pathname !== "/" && <Navbar />}
         </div>          
  <Routes>
    <Route exact path='/' element={<LandingPage/>}/>
    <Route exact path='/home' element={<Home/>}/>
    <Route exact path="/detail" element ={<Detail />}/>
    <Route exact path='/create' element = {<Form   />}/>
  </Routes>
    </div>
  );
}

export default App;
