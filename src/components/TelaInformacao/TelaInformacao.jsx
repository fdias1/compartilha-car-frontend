import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import BotaoPadrao from '../BotaoPadrao/BotaoPadrao'
import {useHistory} from 'react-router-dom'


const TelaInformacao = (props) => {
    const history = useHistory()
    const voltarHandler = () => {
        history.goBack()
    }
    return ( 
        <div className="container">
            <div className="tela-container">   
                <div className="header">
                    <h2 className="titulo-tela">
                        {props.titulo}: 
                    </h2>
                    <BotaoPadrao label={<div><FontAwesomeIcon icon={faArrowLeft} /> Voltar</div>} id="voltar" onClick={() => voltarHandler()}/>
                </div> 
                <div className="itens-container">
                    {props.children}
                </div>
            </div>
        </div>
     );
}
 
export default TelaInformacao;