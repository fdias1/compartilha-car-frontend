import './style.css'
import BotaoQuadrado from '../BotaoQuadrado/BotaoQuadrado'
import Menu from '../Menu/Menu'
import {useHistory} from 'react-router-dom'
import {useState} from 'react'

import { faCar,faGasPump,faUsers,faHistory,faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const MenuCarro = (props) => {
    const history = useHistory()
    const [state,setState] = useState({apelido:localStorage.getItem('apelido'),placa:localStorage.getItem('placa')})

    const voltarHandler = () => {
        localStorage.removeItem('placa')
        localStorage.removeItem('apelido')
        history.push('/home')
    }

    return ( 
        <Menu titulo={`${state.apelido} (${state.placa})`}>
            <BotaoQuadrado label="Inserir Kilometragem"     id="kilometragem"   icon={faCar}        onClick={() => history.push('/rodagem')}/>
            <BotaoQuadrado label="Inserir Abastecimento"    id="abastecimento"  icon={faGasPump}    onClick={() => history.push('/abastecer')}/>
            <BotaoQuadrado label="Usuários"                 id="usuarios"       icon={faUsers}      onClick={() => history.push('/usuarios')}/>
            <BotaoQuadrado label="Histórico"                id="historico"      icon={faHistory}    onClick={() => history.push('/historico')}/>
            <BotaoQuadrado labelOnly label="Voltar"         id="voltar"         icon={faArrowLeft}  onClick={() => voltarHandler()}/>
        </Menu> 
     );
}
 
export default MenuCarro;
