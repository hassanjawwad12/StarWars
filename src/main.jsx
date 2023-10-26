import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Planets.jsx'
import Starwars from './Starwars.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
    <Starwars />
    </QueryClientProvider>
  </React.StrictMode>,
)