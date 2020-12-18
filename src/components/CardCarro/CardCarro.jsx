import './style.css'

const CardCarro = (props) => {
    return ( 
        <div className="card-carro">
            <h2 className="apelido">{props.apelido}</h2>
            <p className="placa">Placa: {props.placa}</p>
        </div>
     );
}
 
export default CardCarro;