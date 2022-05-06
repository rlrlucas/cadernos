import axios, {AxiosResponse, AxiosError} from 'axios';
import {api} from '../Services/api';
import jwt from 'jwt-decode' 

export interface loginI{
    UserName:string;
    Password: string;
}
export interface Token{
    exp: number;
    iat: number;
    nbf:number;
    Utilizador: String;
    Role: String;
}
export async function login( user:loginI) {
    var payload:any;

     await axios.post(api+"Members/authentication", user).then((resulte) =>{
        localStorage.setItem('token', resulte.data)
        var tokem:Token= jwt(resulte.data)
        payload= resulte.status;
        
     }) .catch(function(error:AxiosError){
        payload= error.response?.status;
    });
    
    return (payload); 
}