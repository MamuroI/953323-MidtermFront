import axios from "axios";

export const URL = 'http://localhost:8080'

export const client = axios.create({
    baseURL: URL,
    
})

// const getStock = (token)=>{
//     return client.get(`/stock`,{
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     })
// }

// const buyCoin = (data, token) =>{
//     return client.get(`/buy`,
//     {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     }, {
//         data:{
//             id: data.id
//         }
//     })
// }}