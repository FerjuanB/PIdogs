import Dog from "../Dog/Dog"
import style from './DogsContainer.module.css'
const DogContainer = ()=>{
   const dogs = [
	{
		"id": 76,
		"nombre": "Chesapeake Bay Retriever",
		"imagen": "9BXwUeCc2",
		"Altura": {
			"imperial": "21 - 26",
			"metric": "53 - 66"
		},
		"Peso": {
			"imperial": "55 - 80",
			"metric": "25 - 36"
		},
		"Anios_de_vida": "10 - 13 years",
		"created": false
	},
	{
		"id": 121,
		"nombre": "Golden Retriever",
		"imagen": "HJ7Pzg5EQ",
		"Altura": {
			"imperial": "21.5 - 24",
			"metric": "55 - 61"
		},
		"Peso": {
			"imperial": "55 - 75",
			"metric": "25 - 34"
		},
		"Anios_de_vida": "10 - 12 years",
		"created": false
	},
	{
		"id": 149,
		"nombre": "Labrador Retriever",
		"imagen": "B1uW7l5VX",
		"Altura": {
			"imperial": "21.5 - 24.5",
			"metric": "55 - 62"
		},
		"Peso": {
			"imperial": "55 - 80",
			"metric": "25 - 36"
		},
		"Anios_de_vida": "10 - 13 years",
		"created": false
	},
	{
		"id": 177,
		"nombre": "Nova Scotia Duck Tolling Retriever",
		"imagen": "SyYtQe5V7",
		"Altura": {
			"imperial": "17 - 21",
			"metric": "43 - 53"
		},
		"Peso": {
			"imperial": "35 - 50",
			"metric": "16 - 23"
		},
		"Anios_de_vida": "12 - 14 years",
		"created": false
	}
]
    return (
        <div className={style.main}>
            {dogs.map(dog =>{
                return <Dog 
                id={dog.id}
                nombre={dog.nombre}
                imagen={dog.imagen}
                Altura={dog.Altura.metric}
                Peso={dog.Peso.metric}                
                Años_de_vida={dog.Anios_de_vida}
                Temperamento={dog.temperaments}
                />})}
        </div>
    )
}

export default DogContainer;