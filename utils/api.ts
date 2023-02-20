import axios,{AxiosResponse} from "axios"
import { Todos, User } from "./types"


export const getUserAPI = async()=>{
   let res:AxiosResponse<User[]> =  await axios.get(`https://jsonplaceholder.typicode.com/users`)
//    console.log(res.data)
   return res.data
}

export const getTodosAPI=async (id:string)=>{
    // console.log(id)
    
    let res:AxiosResponse<Todos[]>=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
    // console.log("REsult",res?.data)
    return res?.data
}