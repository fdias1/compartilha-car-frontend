import './style.css'
import CardUsuario from '../../components/CardUsuario/CardUsuario'
import TelaInformacao from '../../components/TelaInformacao/TelaInformacao'
import { useState, useEffect } from 'react'

const Usuarios = (props) => {
    const usuarios = JSON.parse(localStorage.getItem('usuarios'))
    const registros = JSON.parse(localStorage.getItem('registros'))
    const [cardUsuarios,setCardUsuarios] = useState([])
    useEffect(() => {
        const listaUsuarios = []
        usuarios.forEach(usuario => {
            const km = registros.filter( registro => registro.tipo === 'km' && registro.usuario === usuario).reduce((sum,registro) => sum + registro.valor,0)
            const gas = registros.filter( registro => registro.tipo === 'gas' && registro.usuario === usuario).reduce((sum,registro) => sum + registro.valor,0)
            const balance = registros.filter( registro => registro.tipo === 'balance' && registro.usuario === usuario).reduce((sum,registro) => sum + registro.valor,0)
            const data = {nome:usuario.nome,km,gas,balance}
            listaUsuarios.push(data)
        })
        console.log(listaUsuarios)
        setCardUsuarios(listaUsuarios)
    },[usuarios,registros])
    return ( 
        <TelaInformacao titulo="Usuários">
            {cardUsuarios.map(usuario => (
                <CardUsuario 
                    nome={usuario.nome} 
                    abastecimento={usuario.gas} 
                    rodagem={usuario.km} 
                    saldo={usuario.balance}
                />
            ))}
        </TelaInformacao>
     );
}
 
export default Usuarios;