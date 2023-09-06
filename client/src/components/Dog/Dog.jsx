import style from './Dog.module.css'
const {  MY_API_K } = process.env
const Dog = (props)=>{
    return(
        <div className={style.card}>
            <p>
        Name:{props.nombre}
            </p>
            <img src={`https://cdn2.thedogapi.com/images/${props.imagen}`} alt="" />
            <p>
                Peso:{props.Peso} Kg
                </p>  
            <p>
                Temperamento:{props.temperaments}
            </p>
        </div>
    )
}

export default Dog;