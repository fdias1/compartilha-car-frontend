const autenticar = (email,senha) => {
    if (email == 'test@test.com' && senha == '123') {
        return {ok:true,token:'testTOken',nome:'Fábio',sobrenome:'Dias',email:'fabbiodiaz@gmail.com',id:'userId'}
    } else {
        return {ok:false,mensagem:'erro durante a autenticação, tente novamente'}
    }
}

const getCarros = () => {
    return {
        ok:true,
        carros:[
            {apelido:"Nosso Ka", placa:"PWM0261"},
            {apelido:"LM Frotas", placa:"QQO1618"}
        ]
    }
}

module.exports = {autenticar,getCarros}