import './style.css'
import api from '../../services/webApi'
import {useHistory} from 'react-router-dom'
import { useAlert } from 'react-alert'

const CardCarro = (props) => {
    const history = useHistory()
    const alert = useAlert()
    
    const clickHandler = async () => {
        try {

            localStorage.setItem('apelido',props.carro.apelido)
            localStorage.setItem('placa',props.carro.placa)
            localStorage.setItem('carroId',props.carro._id)
            
            const response = await api.get(`registros?carro=${props.carro._id}`,{headers:{token:localStorage.getItem('token')}})
            const data = response.data
            const registros = data.retorno
            localStorage.setItem('registros',JSON.stringify(registros))
            if (localStorage.getItem('registros')) {
                history.push('/carro')
            }
        } catch (err) {
            alert.error('algo deu errado,tentei novamente mais tarde')
        }
    }
    return ( 
        <div className="card-carro" onClick={() => clickHandler()}>
            <h2 className="apelido">{props.apelido}</h2>
            <p className="placa">Placa: {props.placa}</p>
        </div>
     );
}
 
export default CardCarro;