import { Link } from "react-router-dom"
import style from "./navB.module.css"
const navB = ()=>{

    return(
        <div className={style.main} >
            <Link to="/home">HOME</Link>
            <Link to="/create">FORM</Link>
        </div>
    )
}


export default navB;