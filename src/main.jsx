import React from 'react'
import ReactDOM from 'react-dom/client'
import Provider from './Provider/Provider';
import './index.css'
import {
  QueryClient,
  QueryClientProvider,

} from "@tanstack/react-query";
import {

  RouterProvider
} from "react-router-dom";
import Routes from './Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import { Container } from '@mui/material';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


<QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div >
          <Provider> <RouterProvider router={Routes} /></Provider>
          </div>
        </HelmetProvider>
      </QueryClientProvider>
   
  </React.StrictMode>,
)
