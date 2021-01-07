import './style.css'
import { useHistory } from 'react-router-dom'
import api from '../../services/webApi'
import { useState, useEffect } from 'react'
import BotaoPadrao from '../../components/BotaoPadrao/BotaoPadrao'
import BotaoVoltar from '../../components/BotaoVoltar/BotaoVoltar'
import { useAlert } from 'react-alert'

const FormEditarPerfil = (props) => {
    const history = useHistory()
    const [nome,setNome] = useState(localStorage.getItem('nome'))
    const [sobrenome,setSobrenome] = useState(localStorage.getItem('sobrenome'))
    const [email,setEmail] = useState(localStorage.getItem('email'))
    const [senha,setSenha] = useState('')
    const [senhaConfirma,setSenhaConfirma] = useState('')
    const alert = useAlert()

    useEffect(() => {
        document.querySelector('#nome').value = nome
        document.querySelector('#sobrenome').value = sobrenome
        document.querySelector('#email').value = email
    },[nome,sobrenome,email])

    const textFieldHandler = (event,setState) => {
        const target = event.target
        setState(target.value)
    }
    
    const submitHandler = async () => {
        try {
            if (!nome || !sobrenome || !email) {
                alert.error('Todos os campos são obrigatórios')
                return
            }

            const object = {
                nome,
                sobrenome,
                email,
            }

            if (senha && senha !== senhaConfirma) {
                alert.error('As senhas não conferem')
                return
            }

            if (senha && senha === senhaConfirma) {
                object.senha = senha
            }

            const response = await api.put(`usuarios/${localStorage.getItem('id')}`,object)
            const data = response.data
            console.log(response)
            if (data.ok) {
                alert.success('Usuario atualizado com sucesso')
                localStorage.setItem('nome',nome)
                localStorage.setItem('sobrenome',sobrenome)
                localStorage.setItem('email',email)
                history.push('/home')
            }
        } catch (err) {
            alert.error('Algo deu errado, tente novamente mais tarde')
        }
    }

    return ( 
    <div className="container">
        <form action="#" className="form-registrar">
            <p className="titulo">Editar perfil:</p>
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
            <BotaoPadrao label="Salvar" id="submit" onClick={() => submitHandler()}/>
        </form>
        <div className="voltar">
            <BotaoVoltar />
        </div>
    </div> 
    
    );
}
 
export default FormEditarPerfil;