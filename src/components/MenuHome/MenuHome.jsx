import './style.css'
import BotaoQuadrado from '../BotaoQuadrado/BotaoQuadrado'
import Menu from '../Menu/Menu'
import {useHistory} from 'react-router-dom'

import { faCar,faSignInAlt,faPlus,faUserEdit,faHistory } from '@fortawesome/free-solid-svg-icons'

const MenuHome = (props) => {
    const history = useHistory()

    const LogoutHandler = () => {
        localStorage.clear()
        history.push('/login')
    }

    return ( 
        <Menu titulo="Menu Principal">
            <BotaoQuadrado label="Editar Perfil" id="perfil" icon={faUserEdit} onClick={() => history.push('/perfil')}/>
            <BotaoQuadrado label="Meus Carros" id="carros" icon={faCar} onClick={() => history.push('/meuscarros')}/>
            <BotaoQuadrado label="Meu Histórico" id="historico" icon={faHistory} onClick={() => history.push('/meuhistorico')}/>
            <BotaoQuadrado label="Adicionar Carro" id="adicionar-carro" icon={faPlus} onClick={() => history.push('/registrarcarro')}/>
            <BotaoQuadrado label="Sair" id="sair" icon={faSignInAlt} onClick={() => LogoutHandler()}/>
        </Menu>
     );
}
 
export default MenuHome;
