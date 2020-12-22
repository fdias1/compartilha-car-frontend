import { useHistory } from "react-router-dom";
import { Fragment,useState,useEffect } from "react";

const Auth = (props) => {
    const token = localStorage.getItem('token')
    const placa = localStorage.getItem('placa')
    const history = useHistory()
    useEffect(() => {
        if (token && placa) {
            history.push('/carro')
        } else if (token) {
            history.push('/home')
        } else {
            history.push('/login')
            localStorage.clear()
        }
    })    
    return ( 
        <Fragment/>
    );
}
 
export default Auth;

