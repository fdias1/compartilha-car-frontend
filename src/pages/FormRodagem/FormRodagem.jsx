import './style.css'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import BotaoPadrao from '../../components/BotaoPadrao/BotaoPadrao'
import BotaoVoltar from '../../components/BotaoVoltar/BotaoVoltar'
import { useAlert } from 'react-alert'
import api from '../../services/webApi'

const FormRodagem = (props) => {
    const usuarios = JSON.parse(localStorage.getItem('usuarios'))
    const [usuario,setUsuario] = useState(null)
    const [valor,setValor] = useState(0)
    const alert = useAlert()
    const history = useHistory()

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
                tipo:'km',
                autor:localStorage.getItem('id'),
                carro:localStorage.getItem('carroId'),
            }
            console.log(object)
            const response = await api.post('/registros',object,{headers:{token:localStorage.getItem('token')}})
            if (response.data.ok) {
                alert.success('Dados inseridos com sucesso')
            }
            history.push('/carro')
            
        } catch(err) {
            alert.error('Algo deu errado, tente novamente mais tarde')
        }
    }

    return ( 
    <div className="container">
        <form action="#" className="form-rodagem">
        <label htmlFor="usuario">Informe o usuário:</label>
            <div className="input-container">
                <select name="usuario" id="usuario" onChange={event => usuarioHandler(event)}>
                    <option value={null}>-- SELECIONE --</option>
                        {usuarios.map(usuario => <option value={usuario.id} key={usuario.id}>{usuario.nome}</option> )}
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