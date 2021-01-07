import './style.css'
import api from '../../services/webApi'
import { useState, useEffect } from 'react'
import BotaoQuadrado from '../../components/BotaoQuadrado/BotaoQuadrado'
import Menu from '../../components/Menu/Menu'
import {useHistory} from 'react-router-dom'

import { faCar,faSignInAlt,faPlus,faUserEdit,faLink } from '@fortawesome/free-solid-svg-icons'

const MenuHome = (props) => {
    const history = useHistory()
    const [carros,setCarros] = useState('')
    const id = localStorage.getItem('id')
    
    useEffect(() => (async () => {
    localStorage.setItem('carros',JSON.stringify((await api.get(`/carros?usuarios=${id}`,{headers:{token:localStorage.getItem('token')}})).data.retorno))
        setCarros(localStorage.getItem('token'))
    })(),[carros,id])

    const LogoutHandler = () => {
        localStorage.clear()
        history.push('/login')
    }

    return ( 
        <Menu titulo="Menu Principal">
            <BotaoQuadrado label="Editar Perfil" id="perfil" icon={faUserEdit} onClick={() => history.push('/perfil')}/>
            <BotaoQuadrado label="Meus Carros" id="carros" icon={faCar} onClick={() => history.push('/meuscarros')}/>
            <BotaoQuadrado label="Criar Carro" id="adicionar-carro" icon={faPlus} onClick={() => history.push('/registrarcarro')}/>
            <BotaoQuadrado label="Vincular Carro" id="adicionar-carro" icon={faLink} onClick={() => history.push('/vincularcarro')}/>
            <BotaoQuadrado labelOnly label="Sair" id="sair" icon={faSignInAlt} onClick={() => LogoutHandler()}/>
        </Menu>
     );
}
 
export default MenuHome;
