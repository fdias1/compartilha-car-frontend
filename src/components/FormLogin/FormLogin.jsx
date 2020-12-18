import './style.css'
import {useState} from 'react'
import BotaoPadrao from '../BotaoPadrao/BotaoPadrao'
import { useHistory } from 'react-router-dom'

const FormLogin = (props) => {
    const history=useHistory()
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')

    const textFieldHandler = (event,setState) => {
        const target = event.target
        setState(target.value)
    }
    
    const submitHandler = () => {
        history.push('/home')
        console.log(`chama a api com os dados de login: {email:${email}, senha:${senha}}`)
    }

    const registrarHandler = () => {
        console.log('registrar')
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