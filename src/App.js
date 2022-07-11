import React from 'react';
import logo from './logo.svg';
import './App.css';
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
// import {cilScreenDesktop} from '@coreui/icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CIcon icon={icon.cilContrast} className="App-logo"  />
        <p className='text-red-600'>
          EasyPos
        </p>
        <p className="App-link"> Facturación e Inventario</p>
      </header>
    </div>
  );
}

export default App;
