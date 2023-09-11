import { useEffect } from "react";
import DogsContainer from '../../components/DogsContainer/DogsContainer';
import {useDispatch} from "react-redux"
import {getDogs} from '../../redux/actions'
const Home =()=>{
const dispatch = useDispatch();
  useEffect(()=>{
   dispatch(getDogs()) 
  },[dispatch])

   //  const [searchN, setSearchN] =useState([])
   //  async function onSearch (name) {
   //    try {
   //       const { data } = await axios(
   //          `http://localhost:3001/dogs/name?name=${name}`
   //          );
   //          if (data.name) {
   //             setSearchN(data.name);
   //          }
   //       } catch (error) {
   //          window.alert(error.message);
   //       }
   //    }
  
    return(
        <div>


<DogsContainer />
        </div>
    )
}


export default Home;