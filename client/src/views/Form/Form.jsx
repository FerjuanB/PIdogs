import { useState } from "react";
import style from "./Form.module.css"
import axios from "axios"


const Form = ()=>{

    const [dog,setDog] = useState({
        Nombre:"",
        Altura_min:"",
        Altura_max:"",
        Peso_min:"",
        Peso_max:"",
        Años_de_vida:"",
        Temperamentos:[],
    })

    const [errors,setErrors] = useState({
        Nombre:"",
        Altura_min:"",
        Altura_max:"",
        Peso_min:"",
        Peso_max:"",
        Años_de_vida:"",
        Temperamentos:"",
    })

    const changeHandler=(event)=>{
        const property = event.target.name;
        const  value = event.target.value;
        
        validate({...dog,[property]:value})

        setDog({...dog,[property]:value})
    }


    const validate = (dog)=>{
        
        if (dog.Nombre === "") {
            setErrors({...errors, Nombre:"El campo nombre es requerido"});
        } else if (!isNaN(Number(dog.Nombre))) {
            setErrors({...errors, Nombre:"El campo nombre no puede contener números"})  ;
        }


        if (dog.Altura_min === "" || dog.Altura_max === "") 
            setErrors({...errors, Altura_min:"La altura es requerida",Altura_max:"La altura es requerida"});
        if (isNaN(dog.Altura_min) || isNaN(dog.Altura_max)) 
            setErrors({...errors, Altura_min:"La altura sólo se debe expresar en números", Altura_max:"La altura sólo se debe expresar en números"});
        if(dog.Altura_min === 0 || dog.Altura_max===0)setErrors({...errors,Altura_min:"La altura no puede ser 0", Altura_max:"La altura no puede ser 0"})
        if(dog.Altura_min > dog.Altura_max) 
            setErrors({...errors, Altura_min:"La altura mínima no puede ser mayor a la máxima"});
        
        if(dog.Peso_min ==="" || dog.Peso_max ==="")
        setErrors({...errors, Peso_min:"El peso es requerido", Peso_max:"el peso es requerido"})
        if(isNaN(dog.Peso_min) || isNaN(dog.Peso_max))
            setErrors({...errors, Peso_min:"El peso se debe expresar en numeros"})
        if(dog.Peso_min > dog.Peso_max) 
        setErrors({...errors, Peso_min:"El peso mínimo no puede ser mayor al máximo"})
        ;
        
    
        if(dog.Temperamentos === "" || dog.Temperamentos.length === 0) {
            setErrors({...errors, Temperamentos:"Debes seleccionar al menos un temperamento"}) ;
        }
    
    }
    
    const submitHandler = (event)=>{
        event.preventDefault()
        // const response = axios.post("http://localhost:3001/dogs",Form)
        // .then(res=>alert(res))
        // .catch(err=>alert(err))
    }



    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>Nombre</label>
                <input type="text" value={dog.Nombre} onChange={changeHandler} name="Nombre"></input>
               <span className={style.span}>{errors.Nombre}</span>
            </div>

            <div>
                <label>Altura Minima</label> 
                <input type="text" value={dog.Altura_min} onChange={changeHandler} name="Altura_min"></input>
            </div>


            <div>
                <label>Altura Maxima</label> 
                <input type="text" value={dog.Altura_max} onChange={changeHandler} name="Altura_max"></input>
            </div>

            <div>
                <label htmlFor="">Peso Minimo</label>
                <input type="text" value={dog.Peso_min} onChange={changeHandler} name="Peso_min"></input>
            </div>
            

            <div>
                <label htmlFor="">Peso Maximo</label> 
                <input type="text" value={dog.Peso_max} onChange={changeHandler} name="Peso_max"></input>
            </div>

            <div>
                <label htmlFor="">Años de vida</label>
                <input type="text" value={dog.Años_de_vida} onChange={changeHandler}name="Años_de_vida"></input>
            </div>
            <div>
                <label htmlFor="">Temperamentos</label>
                <input type="text" value={dog.Temperamentos} onChange={changeHandler} name="Temperamentos"></input>
            </div>
            
            <button type="submit">Crear</button>
        </form>
        
    )
    }    

export default Form;
