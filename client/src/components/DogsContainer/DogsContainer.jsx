import Dog from "../Dog/Dog"
import style from './DogsContainer.module.css'
import { useSelector } from "react-redux"
const DogContainer = ()=>{
 
const dogs = useSelector(state =>state.dogs)

    return (
        <div className={style.main}>
            {dogs.map(dog =>{
                return <Dog 
                id={dog.id}
                nombre={dog.nombre}
                imagen={dog.imagen}
                Altura={dog.Altura}
                Peso={dog.Peso}                
                Años_de_vida={dog.Anios_de_vida}
                Temperamento={dog.temperaments}
                />})}
                
        </div>
    )

}

export default DogContainer;