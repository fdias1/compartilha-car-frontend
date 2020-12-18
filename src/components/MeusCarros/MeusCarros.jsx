import './style.css'
import CardCarro from '../CardCarro/CardCarro'
import TelaInformacao from '../TelaInformacao/TelaInformacao'


const MeusCarros = (props) => {
    return ( 
        <TelaInformacao titulo="Meus Carros">
            <CardCarro apelido="Noso Ka" placa="PWM0261" />
            <CardCarro apelido="Carro da Empresa LM" placa="QQO1618" />
        </TelaInformacao>
     );
}
 
export default MeusCarros;