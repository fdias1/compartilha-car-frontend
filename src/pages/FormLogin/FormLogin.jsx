import './style.css'
import api from '../../services/webApi'
import {useState} from 'react'
import BotaoPadrao from '../../components/BotaoPadrao/BotaoPadrao'
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
        try {
            const response = await api.post('usuarios/login',{email,senha})
            const data = response.data
            if (data.ok) {
                localStorage.setItem('nome',data.retorno.nome)
                localStorage.setItem('sobrenome',data.retorno.sobrenome)
                localStorage.setItem('email',data.retorno.email)
                localStorage.setItem('id',data.retorno.id)
                localStorage.setItem('token',data.retorno.token)
                if(localStorage.getItem('token')) {
                    history.push('/home')
                }
            } else {
                throw data.mensagem
            }
        } catch (err) {
            alert.error('Algo deu errado, tente novamente mais tarde')
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