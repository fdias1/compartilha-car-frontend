import './style.css'
import {useState} from 'react'
import BotaoPadrao from '../BotaoPadrao/BotaoPadrao'
import BotaoVoltar from '../BotaoVoltar/BotaoVoltar'
import { useHistory } from 'react-router-dom'
import { useAlert } from 'react-alert'

const FormVincularCarro = (props) => {
    const history=useHistory()
    const [placa,setPlaca] = useState('')
    const [pin,setPin] = useState('')
    const alert = useAlert()

    const regExpHandler = (event,regExp,setState,state) => {
        const valor = event.target.value
        if ( regExp.test(valor) ) {
            setState(event.target.value)
        } else {
            event.target.value = state
        }
    }

    const placaHandler = (event,regExp,setState,state) => {
        event.target.value = event.target.value.toUpperCase()
        regExpHandler(event,regExp,setState,state)
    }
    
    const submitHandler = () => {
        history.goBack()
        console.log(`chama a api com os dados do carro: {placa:${placa}, pin:${pin}}`)
    }

    return ( 
    <div className="container">
        <form action="#" className="form-vincular-carro">
            <p className="titulo">Vincular Carro:</p>
            <div className="input-container">
                <label htmlFor="placa">Placa: </label>
                <input type="text" name="placa" id="placa" onChange={event => placaHandler(event,/^[A-Z0-9]{0,7}$/,setPlaca,placa)}/>
            </div>
            <div className="input-container">
                <label htmlFor="pin">PIN: </label>
                <input type="password" name="pin" id="pin" onChange={event => regExpHandler(event,/^\d{0,4}$/,setPin,pin)} maxLength="4"/>
            </div>
            <BotaoPadrao label="Vincular" id="submit" onClick={() => submitHandler()} />
        </form>
        <div className="voltar">
            <BotaoVoltar />
        </div>
    </div> 
    );
}
 
export default FormVincularCarro;