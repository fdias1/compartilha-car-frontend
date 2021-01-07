import './style.css'
import {useHistory} from 'react-router-dom'

const CardCarro = (props) => {
    const history = useHistory()

    const clickHandler = () => {
        localStorage.setItem('apelido',props.carro.apelido)
        localStorage.setItem('placa',props.carro.placa)
        localStorage.setItem('carroId',props.carro._id)
        history.push('/carro')
    }
    return ( 
        <div className="card-carro" onClick={() => clickHandler()}>
            <h2 className="apelido">{props.apelido}</h2>
            <p className="placa">Placa: {props.placa}</p>
        </div>
     );
}
 
export default CardCarro;