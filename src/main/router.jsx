import { Route, Switch, Redirect} from 'react-router-dom'

import FormAbastecer from '../pages/FormAbastecer/FormAbastecer'
import FormRodagem from '../pages/FormRodagem/FormRodagem'
import FormLogin from '../pages/FormLogin/FormLogin'
import FormRegistrar from '../pages/FormRegistrar/FormRegistrar'
import FormEditarPerfil from '../pages/FormEditarPerfil/FormEditarPerfil'
import FormRegistrarCarro from '../pages/FormRegistrarCarro/FormRegistrarCarro'
import FormVincularCarro from '../pages/FormVincularCarro/FormVincularCarro'
import MenuCarro from '../pages/MenuCarro/MenuCarro'
import MenuHome from '../pages/MenuHome/MenuHome'
import Historico from '../pages/Historico/Historico'
import MeusCarros from '../pages/MeusCarros/MeusCarros'
import Usuarios from '../pages/Usuarios/Usuarios'

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