import React from 'react'
import ReactDOM from 'react-dom/client'
import Provider from './Provider/Provider';
import './index.css'
import {

  RouterProvider
} from "react-router-dom";
import Routes from './Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
     <Provider> <RouterProvider router={Routes} /></Provider>
    
    </HelmetProvider>


  </React.StrictMode>,
)
