import './style.css'
import api from '../../services/api'
import CardCarro from '../CardCarro/CardCarro'
import TelaInformacao from '../TelaInformacao/TelaInformacao'
import BotaoPadrao from '../BotaoPadrao/BotaoPadrao'
import { Fragment,useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useAlert } from 'react-alert'


const MeusCarros = (props) => {
    const history = useHistory()
    const alert = useAlert()
    const [carros,setCarros] = useState([])
    useEffect(() => {
        const apiResponse = api.getCarros()
        if (apiResponse.ok) {
            setCarros(apiResponse.carros)
        } else {
            alert.error('Não foi possível carregar as informações, tente novamente.')
            history.goBack()
        }
    },[])

    return ( 
        <Fragment>
            <TelaInformacao titulo="Meus Carros">
                {carros.map((carro,index) => {
                    return (<CardCarro apelido={carro.apelido} placa={carro.placa} key={index}/>)
                })}
            </TelaInformacao>
            <BotaoPadrao label="Vincular Carro" id="vincular" onClick={() => history.push('/vincularcarro')}/>
        </Fragment>
     );
}
 
export default MeusCarros;