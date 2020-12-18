import './style.css'
import CardUsuario from '../CardUsuario/CardUsuario'
import TelaInformacao from '../TelaInformacao/TelaInformacao'


const Usuarios = (props) => {
    return ( 
        <TelaInformacao titulo="Usuários">
            <CardUsuario nome="Fábio" abastecimento="24,55" rodagem="105,3" saldo="-34,50"/>
            <CardUsuario nome="Fábio" abastecimento="24,55" rodagem="105,3" saldo="-34,50"/>
            <CardUsuario nome="Fábio" abastecimento="24,55" rodagem="105,3" saldo="-34,50"/>
        </TelaInformacao>
     );
}
 
export default Usuarios;