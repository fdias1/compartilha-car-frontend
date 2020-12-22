import './style.css'
import api from '../../services/api'
import {useState} from 'react'
import BotaoPadrao from '../BotaoPadrao/BotaoPadrao'
import { useHistory } from 'react-router-dom'
import { useAlert } from 'react-alert'

const FormLogin = (props) => {
    const history=useHistory()
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')
    const alert = useAlert()

    const textFieldHandler = (event,setState) => {
        const target = event.target
        setState(target.value)
    }
    
    const submitHandler = async () => {
        console.log(`chama a api com os dados de login: {email:${email}, senha:${senha}}`)
        const apiResponse = api.autenticar(email,senha)
        
        if (apiResponse.ok) {
            localStorage.setItem('token',apiResponse.token)
            localStorage.setItem('nome',apiResponse.nome)
            localStorage.setItem('sobrenome',apiResponse.sobrenome)
            localStorage.setItem('email',apiResponse.email)
            localStorage.setItem('userId',apiResponse.userId)
            history.push('/home')
        } else {
            alert.error(apiResponse.mensagem)
        }
    }

    return ( 
    <div className="container">
        <form action="#" className="form-login">
            <p className="titulo">Faça login:</p>
            <div className="input-container">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" onChange={event => textFieldHandler(event,setEmail)}/>
            </div>
            <div className="input-container">
                <label htmlFor="senha">Senha: </label>
                <input type="password" name="senha" id="senha" onChange={event => textFieldHandler(event,setSenha)}/>
            </div>
            <BotaoPadrao label="Entrar" id="submit" onClick={() => submitHandler()} />
            <BotaoPadrao labelOnly label="Registre-se" id="registrar" onClick={() => history.push('/registrar')}/>
        </form>
    </div> 
    );
}
 
export default FormLogin;