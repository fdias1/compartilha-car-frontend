import './style.css'

const ItemHistorico = (props) => {
    const classe = `item-historico ${props.tipo || ''}`
    return (
        <div className={classe} id={props.id}>
            <p className="data">
                {props.data}
            </p> 
            <p className="nome">
                {props.usuario}
            </p>
            <p className="valor">
                {props.valor}
            </p>
        </div>
    );
}
 
export default ItemHistorico;