import './style.css'
import { useState, useEffect } from 'react'
import ItemHistorico from '../../components/ItemHistorico/ItemHistorico'
import TelaInformacao from '../../components/TelaInformacao/TelaInformacao'


const Historico = (props) => {
    const registros = JSON.parse(localStorage.getItem('registros'))
    const usuarios = JSON.parse(localStorage.getItem('usuarios'))
    const [cardRegistros,setCardRegistros] = useState([])
    useEffect(() => {
        const conversor = {
            km:'rodagem',
            gas:'abastecimento',
        }

        const cardRegistros = []

        registros.forEach(registro => {
            if (registro.ativo === true && registro.tipo !== 'balance') {
                const nome = usuarios.filter(usuario => usuario.id === registro.usuario).reduce((sum,usuario) => usuario.nome,'')
                cardRegistros.push({id:registro.usuario,usuario:nome,valor:registro.valor,tipo:conversor[registro.tipo],data:registro.data})
            }
        })
        setCardRegistros(cardRegistros)
    },[registros,usuarios])

    
    return ( 
        <TelaInformacao titulo="Histórico">
            {cardRegistros.map(registro => (
                <ItemHistorico 
                    data={registro.data}
                    usuario={registro.usuario}
                    valor={registro.valor}
                    tipo={registro.tipo}
                    key={registro.id}
                />
            ))}
        </TelaInformacao>
     );
}
 
export default Historico;