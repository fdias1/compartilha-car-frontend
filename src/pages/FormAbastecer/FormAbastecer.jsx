import './style.css'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import BotaoPadrao from '../../components/BotaoPadrao/BotaoPadrao'
import BotaoVoltar from '../../components/BotaoVoltar/BotaoVoltar'
import { useAlert } from 'react-alert'
import api from '../../services/webApi'

const FormAbastecer = (props) => {
    const usuarios = JSON.parse(localStorage.getItem('usuarios'))
    const [usuario,setUsuario] = useState(null)
    const [completar,setCompletar] = useState(false)
    const [valor,setValor] = useState(0)
    const alert = useAlert()
    const history = useHistory()

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
    const submitHandler = async () => {
        try {
            console.log(valor,usuario,!!usuario)
            if (!usuario || !valor ) {
                alert.error('preencha todos os campos obrigatórios')
                return
            }
            const object = {
                usuario,
                valor,
                tipo:'gas',
                autor:localStorage.getItem('id'),
                carro:localStorage.getItem('carroId'),
            }
            console.log(object)
            const response = await api.post('/registros',object,{headers:{token:localStorage.getItem('token')}})
            if (response.data.ok && !completar) {
                alert.success('Dados inseridos com sucesso')
            } else if (completar && response.data.ok) {
                const response = await api.post('/registros/balance',{
                    usuario,
                    carro:localStorage.getItem('carroId')
                },{headers:{token:localStorage.getItem('token')}})
                
                if (response.data.ok) {
                    alert.success('Dados inseridos com sucesso, saldo calculado e contabilizado')
                } else {
                    throw response.data.mensagem
                }
            }
            history.push('/carro')
            
        } catch(err) {
            alert.error('Algo deu errado, tente novamente mais tarde')
        }
    }

    return ( 
    <div className="container">
        <form action="#" className="form-abastecer">
            <label htmlFor="usuario">Informe o usuário:</label>
            <div className="input-container">
                <select name="usuario" id="usuario" onChange={event => usuarioHandler(event)}>
                    <option value={null}>-- SELECIONE --</option>
                    {usuarios.map(usuario => <option value={usuario.id} key={usuario.id}>{usuario.nome}</option> )}
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