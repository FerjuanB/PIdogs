import style from './Dog.module.css'
const Dog = (props)=>{
    return(
        <div className={style.card}>
            <p>
        Name:{props.nombre}
            </p>
            <img className={style.imagenD}src={`https://cdn2.thedogapi.com/images/${props.imagen}.jpg`} alt="" />
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