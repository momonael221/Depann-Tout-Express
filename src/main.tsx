import './index.css';
import App from "./App.tsx";
import {Routers} from "./Routes.tsx";
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Loading from "./components/Loading.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Suspense fallback={<Loading/>}>
          <App routers={<Routers/>}/>
      </Suspense>
  </React.StrictMode>
);