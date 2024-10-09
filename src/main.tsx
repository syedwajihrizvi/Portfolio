import React from 'react'
import ReactDOM from 'react-dom/client'
import { StyledEngineProvider } from '@mui/material/styles';
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
        <RouterProvider router={router}/>
    </StyledEngineProvider>
  </React.StrictMode>,
)
