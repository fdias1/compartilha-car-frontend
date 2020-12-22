import './global.css'

import { BrowserRouter } from 'react-router-dom'
import Routes from './router'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Auth from "../services/auth";

function App() {
  const options = {
    // you can also just use 'bottom center'
    position: positions.MIDDLE,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
  }

  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <div className="app">
        <div className="main-header"><h1>CompartilhaCar</h1></div>
        <BrowserRouter>
          <Auth/>
          <Routes />
        </BrowserRouter>
      </div>
    </AlertProvider>
  );
}

export default App;
