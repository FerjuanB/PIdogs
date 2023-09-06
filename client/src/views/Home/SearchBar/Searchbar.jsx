import { useState } from 'react';
import style from './Searchbar.module.css'


 export default function SearchBar({onSearch}) {
   const[name,setName] = useState('')
const handleChange = (event) => {
   setName(event.target.value)
} 
   return (
       <div className>
          <input className type='search' onChange={handleChange} value={name} placeholder='Search any dog!'/>
          <button  className onClick={()=> onSearch(name)}>Search</button>
       </div>
    );
 }

 
