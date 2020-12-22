import './style.css'
import {useState} from 'react'
import BotaoPadrao from '../BotaoPadrao/BotaoPadrao'
import BotaoVoltar from '../BotaoVoltar/BotaoVoltar'
import { useAlert } from 'react-alert'

const FormRodagem = (props) => {
    const [valor,setValor] = useState(0)
    const [usuario,setUsuario] = useState(null)

    const valorHandler = event => {
        const target = event.target
        const value = target.value.replace('.','')
        const length = value.length
        const novoValor = value.slice(0,length-1)+'.'+value.slice(length-1)

        setValor(novoValor)
        target.value = novoValor
    }

    const usuarioHandler = event => {
        setUsuario(event.target.value)
    } 

    const submitHandler = () => {
        console.log(`chama a api com os dados: {usuario:${usuario}, valor:${valor}}`)
    }

    return ( 
    <div className="container">
        <form action="#" className="form-rodagem">
        <label htmlFor="usuario">Informe o usuário:</label>
            <div className="input-container">
                <select name="usuario" id="usuario" onChange={event => usuarioHandler(event)}>
                    <option value="null">-- SELECIONE --</option>
                    <option value="fabio">Fábio</option>
                    <option value="leonardo">Leonardo</option>
                    <option value="rita">Rita</option>
                    <option value="davino">Davino</option>
                </select>
            </div>
            <label htmlFor="valor">Informe a kilometragem rodada:</label>
            <div className="input-container">
                <input type="number" name="valor" id="valor" onChange={event => valorHandler(event)}/>
                <span>Km</span>
            </div>
            <BotaoPadrao label="Inserir Kilometragem" id="submit" onClick={() => submitHandler()}/>
        </form>
        <div className="voltar">
            <BotaoVoltar />
        </div>
    </div> 
    );
}
 
export default FormRodagem;