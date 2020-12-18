import './style.css'
import {useState} from 'react'
import BotaoPadrao from '../BotaoPadrao/BotaoPadrao'
import BotaoVoltar from '../BotaoVoltar/BotaoVoltar'

const FormEditarPerfil = (props) => {
    const [nome,setNome] = useState('')
    const [sobrenome,setSobrenome] = useState('')
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')
    const [senhaConfirma,setSenhaConfirma] = useState('')

    const textFieldHandler = (event,setState) => {
        const target = event.target
        setState(target.value)
    }
    
    const submitHandler = () => {
        console.log(`chama a api com os novos dados do usuario: {nome:${nome}, sobrenome:${sobrenome} email:${email}, senha:${senha}, senhaConfirma:${senhaConfirma}}`)
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