import './style.css'
import BotaoQuadrado from '../BotaoQuadrado/BotaoQuadrado'
import Menu from '../Menu/Menu'
import {useHistory} from 'react-router-dom'

import { faCar,faGasPump,faUsers,faHistory,faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const MenuCarro = (props) => {
    const history = useHistory()

    return ( 
        <Menu titulo="Nosso Ka com titulo enorme (PWM0261)">
            <BotaoQuadrado label="Inserir Kilometragem" id="kilometragem" icon={faCar} onClick={() => history.push('/rodagem')}/>
            <BotaoQuadrado label="Inserir Abastecimento" id="abastecimento" icon={faGasPump} onClick={() => history.push('/abastecer')}/>
            <BotaoQuadrado label="Usuários" id="usuarios" icon={faUsers} onClick={() => history.push('/usuarios')}/>
            <BotaoQuadrado label="Histórico" id="historico" icon={faHistory} onClick={() => history.push('/historico')}/>
            {
            //<BotaoQuadrado label="Outras Funções" id="outras" icon={faEllipsisH}/>
            }
            <BotaoQuadrado labelOnly label="Voltar" id="voltar" icon={faArrowLeft} onClick={() => history.push('/home')}/>
        </Menu>
     );
}
 
export default MenuCarro;
