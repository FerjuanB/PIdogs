import { Link } from "react-router-dom"
import style from "./navB.module.css"
import SearchBar from "./SearchBar/Searchbar"
const Navbar = ()=>{

    return(
        <div className={style.main} >
            <Link to="/home">HOME</Link>
            <Link to="/create">FORM</Link>
            <SearchBar  />
        </div>
    )
}


export default Navbar;