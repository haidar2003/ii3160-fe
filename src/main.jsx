import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="10453949934-3o9p9hp6t9ec6i3anugkfbtb2g95sdqo.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
