import './style.css'
import api from '../../services/webApi'
import BotaoQuadrado from '../../components/BotaoQuadrado/BotaoQuadrado'
import Menu from '../../components/Menu/Menu'
import {useHistory} from 'react-router-dom'
import { useState, useEffect } from 'react'

import { faCar,faGasPump,faUsers,faHistory,faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const MenuCarro = (props) => {
    const history = useHistory()
    const [apelido,setApelido] = useState(localStorage.getItem('apelido'))
    const [usuarios,setUsuarios] = useState(localStorage.getItem('usuarios'))
    const [placa,setPlaca] = useState(localStorage.getItem('placa'))
    const [registros,setRegistros] = useState(localStorage.getItem('registros'))
    const carroId = localStorage.getItem('carroId')

    useEffect(() => (async () => {
        const response = await api.get(`carros/${carroId}`,{headers:{token:localStorage.getItem('token')}})
        const data = response.data
        localStorage.setItem('apelido',data.retorno.apelido)
        localStorage.setItem('placa',data.retorno.placa)
        const usuarios = []
        for (let usuario of data.retorno.usuarios) {
            const response = await api.get(`usuarios/${usuario}`,{headers:{token:localStorage.getItem('token')}})
            usuarios.push({nome:response.data.retorno.nome,id:response.data.retorno._id})
        }
        localStorage.setItem('usuarios',JSON.stringify(usuarios))
        setUsuarios(localStorage.getItem('usuarios'))
        setApelido(localStorage.getItem('apelido'))
        setPlaca(localStorage.getItem('placa'))
    })(),[carroId,usuarios])

    useEffect(() => (async () => {
        const response = await api.get(`registros?carro=${carroId}`,{headers:{token:localStorage.getItem('token')}})
        const data = response.data
        const registros = data.retorno
        localStorage.setItem('registros',JSON.stringify(registros))
        setRegistros(localStorage.getItem('registros'))
    })(),[registros,carroId])

    const voltarHandler = () => {
        localStorage.removeItem('placa')
        localStorage.removeItem('apelido')
        localStorage.removeItem('carroId')
        localStorage.removeItem('registros')
        history.push('/home')
    }

    return ( 
        <Menu titulo={`${apelido} (${placa})`}>
            <BotaoQuadrado label="Inserir Kilometragem"     id="kilometragem"   icon={faCar}        onClick={() => history.push('/rodagem')}/>
            <BotaoQuadrado label="Inserir Abastecimento"    id="abastecimento"  icon={faGasPump}    onClick={() => history.push('/abastecer')}/>
            <BotaoQuadrado label="Usuários"                 id="usuarios"       icon={faUsers}      onClick={() => history.push('/usuarios')}/>
            <BotaoQuadrado label="Histórico"                id="historico"      icon={faHistory}    onClick={() => history.push('/historico')}/>
            <BotaoQuadrado labelOnly label="Voltar"         id="voltar"         icon={faArrowLeft}  onClick={() => voltarHandler()}/>
        </Menu> 
     );
}
 
export default MenuCarro;
