import axios from "axios"
// const {MY_API_K} = process.env
export const GET_DOGS = "GET_DOGS"
export const GET_DOG_ID = "GET_DOG_ID"
export const FILTER_BY_SOURCE = "FILTER_BY_SOURCE"

export const getDogs = ()=> {
    return async function(dispatch){
        const apiDog = await axios.get("http://localhost:3001/dogs")
    const dogs = apiDog.data;
   
    dispatch({type:GET_DOGS, payload:dogs})
    }}


export const getDogId = (id) =>{
    return async function(dispatch){
        const apiDog = await axios.get(
            `http://localhost:3001/dogs/${id}`
        )
        const dog = apiDog.data;
        dispatch({type:GET_DOG_ID, payload:dog})
    }
}

// export const filterBySource = ()=>{
//     dispatch({type:FILTER_BY_SOURCE})
// }
