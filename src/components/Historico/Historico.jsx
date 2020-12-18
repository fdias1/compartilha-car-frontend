import './style.css'
import ItemHistorico from '../ItemHistorico/ItemHistorico'
import TelaInformacao from '../TelaInformacao/TelaInformacao'


const Historico = (props) => {
    return ( 
        <TelaInformacao titulo="Histórico">
            <ItemHistorico data="12/12/2012" usuario="Fábio" valor="R$ 32,56" tipo="abastecimento"/>
            <ItemHistorico data="12/12/2012" usuario="Fábio" valor="23,5 Km" tipo="rodagem"/>
            <ItemHistorico data="12/12/2012" usuario="Fábio" valor="R$ 126,86" tipo="abastecimento"/>
            <ItemHistorico data="12/12/2012" usuario="Fábio" valor="38,4 Km" tipo="rodagem"/>
        </TelaInformacao>
     );
}
 
export default Historico;