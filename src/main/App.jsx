import './global.css'

import { BrowserRouter } from 'react-router-dom'
import Routes from './router'

function App() {
  return (
    <div className="app">
      <div className="main-header"><h1>CompartilhaCar</h1></div>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
