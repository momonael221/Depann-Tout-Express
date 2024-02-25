import './index.css';
import React from 'react';
import App from "./App.tsx";
import {router} from "./Routes.ts";
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <App>
          <RouterProvider router={router} />
      </App>
  </React.StrictMode>,
)