import axios, {AxiosResponse} from 'axios';
import {api} from './api';
import jwt from 'jwt-decode' 


export async function post( payload:any, rota:string) {
    const resulte:AxiosResponse = await axios.post(api.concat(rota), payload,
    { headers: 
        {"Authorization" : `Bearer ${localStorage.getItem("token")}`} })

    console.log(resulte.status.toString())

    return (resulte);
}