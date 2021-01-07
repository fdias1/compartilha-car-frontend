import './style.css'
import api from '../../services/webApi'
import {useState} from 'react'
import BotaoPadrao from '../../components/BotaoPadrao/BotaoPadrao'
import BotaoVoltar from '../../components/BotaoVoltar/BotaoVoltar'
import { useAlert } from 'react-alert'
import { useHistory } from 'react-router-dom'

const FormRegistrar = (props) => {
    const history = useHistory()
    const [nome,setNome] = useState('')
    const [sobrenome,setSobrenome] = useState('')
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')
    const [senhaConfirma,setSenhaConfirma] = useState('')
    const alert = useAlert()

    const textFieldHandler = (event,setState) => {
        const target = event.target
        setState(target.value)
    }
    
    const submitHandler = async () => {
        try {
            if (!nome || !sobrenome || !email || !senha) {
                alert.error('Todos os campos são obrigatórios')
                return
            }
            if (senha !== senhaConfirma) {
                alert.error('As senhas não conferem')
                return
            }

            const response = await api.post('usuarios',{nome,sobrenome,email,senha})
            const data = response.data
            console.log(response)
            if (data.ok) {
                alert.success('Usuario cadastrado com sucesso')
                history.push('/login')
            }
        } catch (err) {
            alert.error('Algo deu errado, tente novamente mais tarde')
        }
    }

    return ( 
    <div className="container">
        <form action="#" className="form-registrar">
            <p className="titulo">Registre-se:</p>
            <div className="input-container">
                <label htmlFor="nome">Nome: </label>
                <input type="text" name="nome" id="nome" onChange={event => textFieldHandler(event,setNome)}/>
            </div>
            <div className="input-container">
                <label htmlFor="sobrenome">Sobrenome: </label>
                <input type="text" name="sobrenome" id="sobrenome" onChange={event => textFieldHandler(event,setSobrenome)}/>
            </div>
            <div className="input-container">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" onChange={event => textFieldHandler(event,setEmail)}/>
            </div>
            <div className="input-container">
                <label htmlFor="senha">Senha: </label>
                <input type="password" name="senha" id="senha" onChange={event => textFieldHandler(event,setSenha)}/>
            </div>
            <div className="input-container">
                <label htmlFor="senha-confirma">Confirmar Senha: </label>
                <input type="password" name="senha-confirma" id="senha-confirma" onChange={event => textFieldHandler(event,setSenhaConfirma)}/>
            </div>
            <BotaoPadrao label="Registre-se" id="submit" onClick={() => submitHandler()}/>
        </form>
        <div className="voltar">
            <BotaoVoltar />
        </div>
    </div> 
    
    );
}
 
export default FormRegistrar;