import SearchBar from './SearchBar/Searchbar'
import axios from 'axios'
import { useState } from "react";
import DogsContainer from '../../components/DogsContainer/DogsContainer';

const Home =({onSearch})=>{
    const [searchN, setSearchN] =useState([])
  
    async function onSearch (name) {
      try {
         const { data } = await axios(
            `http://localhost:3001/dogs/name?name=${name}`
            );
            if (data.name) {
               setSearchN(data.name);
            }
         } catch (error) {
            window.alert(error.message);
         }
      }
  
    return(
        <div>
<SearchBar onSearch={onSearch} />

<DogsContainer />
        </div>
    )
}


export default Home;