import './style.css'
import {useState} from 'react'
import BotaoPadrao from '../BotaoPadrao/BotaoPadrao'
import BotaoVoltar from '../BotaoVoltar/BotaoVoltar'
import { useAlert } from 'react-alert'

const FormAbastecer = (props) => {
    const [usuario,setUsuario] = useState(null)
    const [completar,setCompletar] = useState(false)
    const [valor,setValor] = useState(0)
    const alert = useAlert()

    const completarTanqueHandler = event => {
        const target = event.target
        target.classList.toggle('disabled')
        target.classList.toggle('enabled')
        setCompletar(!completar)
    }

    const valorHandler = event => {
        const target = event.target
        const value = target.value.replace('.','')
        const length = value.length
        const novoValor = value.slice(0,length-2)+'.'+value.slice(length-2)

        setValor(novoValor)
        target.value = novoValor
    }

    const usuarioHandler = event => {
        setUsuario(event.target.value)
    } 
    const submitHandler = () => {
        console.log(`chama a api com os dados: {usuario:${usuario}, completar:${completar}, valor:${valor}}`)
    }

    return ( 
    <div className="container">
        <form action="#" className="form-abastecer">
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
            <label htmlFor="valor">Informe o valor abastecido:</label>
            <div className="input-container">
                <span>R$</span>
                <input type="number" name="valor" id="valor" onChange={event => valorHandler(event)}/>
            </div>
            <input type="hidden" name="completar" value="false"/>
            <BotaoPadrao toggle default="disabled" label="Completei o tanque" id="completar" onClick={(event) => completarTanqueHandler(event)}/>
            <BotaoPadrao label="Inserir Abastecimento" id="submit" onClick={() => submitHandler()}/>
        </form>
        <div className="voltar">
            <BotaoVoltar />
        </div>
    </div> 
    );
}
 
export default FormAbastecer;