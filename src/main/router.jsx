import { Route, Switch, Redirect} from 'react-router-dom'

import FormAbastecer from '../components/FormAbastecer/FormAbastecer'
import FormRodagem from '../components/FormRodagem/FormRodagem'
import FormLogin from '../components/FormLogin/FormLogin'
import FormRegistrar from '../components/FormRegistrar/FormRegistrar'
import FormEditarPerfil from '../components/FormEditarPerfil/FormEditarPerfil'
import FormRegistrarCarro from '../components/FormRegistrarCarro/FormRegistrarCarro'
import FormVincularCarro from '../components/FormVincularCarro/FormVincularCarro'
import MenuCarro from '../components/MenuCarro/MenuCarro'
import MenuHome from '../components/MenuHome/MenuHome'
import Historico from '../components/Historico/Historico'
import MeusCarros from '../components/MeusCarros/MeusCarros'
import Usuarios from '../components/Usuarios/Usuarios'

const Routes = () => {
    
    return ( 
        <Switch>
            <Route path="/login" exact={true} component={FormLogin} />
            <Route path="/home" exact={true} component={MenuHome} />
            <Route path="/abastecer" exact={true} component={FormAbastecer} />
            <Route path="/rodagem" exact={true} component={FormRodagem} />
            <Route path="/registrar" exact={true} component={FormRegistrar} />
            <Route path="/registrarcarro" exact={true} component={FormRegistrarCarro} />
            <Route path="/carro" exact={true} component={MenuCarro} />
            <Route path="/historico" exact={true} component={Historico} />
            <Route path="/meuhistorico" exact={true} component={Historico} />
            <Route path="/meuscarros" exact={true} component={MeusCarros} />
            <Route path="/usuarios" exact={true} component={Usuarios} />
            <Route path="/perfil" exact={true} component={FormEditarPerfil} />
            <Route path="/vincularcarro" exact={true} component={FormVincularCarro} />
            <Route path='/' exact={true}>
                <Redirect to='/login' />
            </Route>
        </Switch>
     );
}
 
export default Routes;