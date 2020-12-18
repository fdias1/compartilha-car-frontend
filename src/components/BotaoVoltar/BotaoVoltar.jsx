import './style.css'
import BotaoPadrao from '../BotaoPadrao/BotaoPadrao'

import {useHistory} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'



const BotaoVoltar = (props) => {
    const history = useHistory()
    
    const voltarHandler = () => {
        history.goBack()
    }

    return ( 
        <BotaoPadrao label={<div><FontAwesomeIcon icon={faArrowLeft} /> Voltar</div>} id="voltar" onClick={() => voltarHandler()}/>
     );
}
 
export default BotaoVoltar;
