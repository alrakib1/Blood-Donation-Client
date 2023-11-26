import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import Routers from './Routers/Routers';

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='container mx-auto'>
   <React.StrictMode>
    <RouterProvider router={Routers} />
  </React.StrictMode>
 </div>,
)
