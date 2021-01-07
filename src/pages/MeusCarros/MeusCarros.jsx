import './style.css'
import api from '../../services/webApi'
import CardCarro from '../../components/CardCarro/CardCarro'
import TelaInformacao from '../../components/TelaInformacao/TelaInformacao'
import { useState, useEffect } from 'react'
import { useAlert } from 'react-alert'


const MeusCarros = (props) => {
    const alert = useAlert()
    const [listaCarros,setListaCarros] = useState(JSON.parse(localStorage.getItem('carros')))

    useEffect(() => (async () => {
        try {
            const response = await api.get(`carros?usuarios=${localStorage.getItem('id')}`,{headers:{token:localStorage.getItem('token')}})
            const data = response.data
            const novaListaCarros = data.retorno
            setListaCarros(novaListaCarros)
        } catch (err) {
            alert.error('Algo deu errado, tente novamente mais tarde')
        }
    })())
    useEffect(() => (async () => {
        localStorage.setItem('carros',JSON.stringify(listaCarros))
    })(),[listaCarros])

    return ( 
        <TelaInformacao titulo="Meus Carros">
            {listaCarros.map((carro,index) => {
                return (<CardCarro apelido={carro.apelido} placa={carro.placa} key={index} carro={carro}/>)
            })}
        </TelaInformacao>
     );
}
 
export default MeusCarros;