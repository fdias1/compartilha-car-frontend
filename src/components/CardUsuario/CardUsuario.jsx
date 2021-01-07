import './style.css'

const CardUsuario = (props) => {
    return ( 
        <div className="card-usuario">
            <h2 className="nome">
                {props.nome}
            </h2>
            <p className="dados">
                Rodagem: {new Intl.NumberFormat('pt-BR', { style: 'unit', unit: "kilometer",maximumFractionDigits:2 }).format(props.rodagem)}
            </p>
            <p className="dados">
                Abastecimento: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.abastecimento)} 
            </p>
            <p className="dados">
                Saldo: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.saldo)}
            </p>
        </div>
     );
}
 
export default CardUsuario;