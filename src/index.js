import React from 'react';
import ReactDOM from 'react-dom';
import PokedexApp from "./PokedexApp";

import 'bootstrap/dist/css/bootstrap.css'
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <PokedexApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

