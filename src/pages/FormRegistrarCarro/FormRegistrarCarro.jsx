import './style.css'
import api from '../../services/webApi'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import BotaoPadrao from '../../components/BotaoPadrao/BotaoPadrao'
import BotaoVoltar from '../../components/BotaoVoltar/BotaoVoltar'
import { useAlert } from 'react-alert'

const FormRegistrarCarro = (props) => {
    const history = useHistory()
    const [apelido,setApelido] = useState('')
    const [placa,setPlaca] = useState('')
    const [pin,setPin] = useState('')
    const [pinConfirma,setPinConfirma] = useState('')
    const alert = useAlert()

    const textFieldHandler = (event,setState) => {
        const target = event.target
        setState(target.value)
    }
    
    const submitHandler = async () => {
        try {
            if (!apelido || !placa || !pin) {
                alert.error('Todos os campos são obrigatórios')
                return
            }
            if (pin !== pinConfirma) {
                alert.error('Os PINs não conferem')
                return
            }

            const response = await api.post('carros',{apelido,placa,pin,usuarios:[localStorage.getItem('id')]},{headers:{token:localStorage.getItem('token')}})
            const data = response.data
            console.log(response)
            if (data.ok) {
                alert.success('Carro cadastrado com sucesso')
                history.push('/home')
            }
        } catch (err) {
            alert.error('Algo deu errado, tente novamente mais tarde')
        }
    }

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

    return ( 
    <div className="container">
        <form action="#" className="form-registrar">
            <p className="titulo">Cadastrar Novo Carro:</p>
            <div className="input-container">
                <label htmlFor="apelido">Apelido: </label>
                <input type="text" name="apelido" id="apelido" onChange={event => textFieldHandler(event,setApelido)}/>
            </div>
            <div className="input-container">
                <label htmlFor="placa">Placa: </label>
                <input type="text" name="placa" id="placa" onChange={event => placaHandler(event,/^[A-Z0-9]{0,7}$/,setPlaca,placa)}/>
            </div>
            <div className="input-container">
                <label htmlFor="pin">PIN: </label>
                <input type="password" name="pin" id="pin" onChange={event => regExpHandler(event,/^\d{0,4}$/,setPin,pin)} maxLength="4"/>
            </div>
            <div className="input-container">
                <label htmlFor="pin-confirma">Confirar PIN: </label>
                <input type="password" name="pin-confirma" id="pin-confirma" onChange={event => regExpHandler(event,/^\d{0,4}$/,setPinConfirma,pinConfirma)} maxLength="4"/>
            </div>
            <BotaoPadrao label="Cadastrar Carro" id="submit" onClick={() => submitHandler()}/>
        </form>
        <div className="voltar">
            <BotaoVoltar />
        </div>
    </div> 
    );
}
 
export default FormRegistrarCarro;