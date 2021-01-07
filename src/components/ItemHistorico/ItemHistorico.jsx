import './style.css'

const ItemHistorico = (props) => {
    const classe = `item-historico ${props.tipo || ''}`
    const currencyFormat = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
    const kmFormat = new Intl.NumberFormat('pt-BR', { style: 'unit', unit: "kilometer",maximumFractionDigits:2 })
    return (
        <div className={classe} id={props.id}>
            <p className="data">
                {new Date(props.data).toLocaleDateString()}
            </p> 
            <p className="nome-historico">
                {props.usuario}
            </p>
            <p className="valor">
                {props.tipo === 'rodagem' ? kmFormat.format(props.valor) : currencyFormat.format(props.valor)}
            </p>
        </div>
    );
}
 
export default ItemHistorico;