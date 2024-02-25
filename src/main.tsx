import './index.css';
import React from 'react';
import App from "./App.tsx";
import {Routers} from "./Routes.tsx";
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <App routers={<Routers/>}/>
  </React.StrictMode>
);