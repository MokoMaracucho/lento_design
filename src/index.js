import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'

import{ LivingPlaceRegistrationProvider } from './Context/LivingPlaceRegistrationContext'

ReactDOM.render(
  <React.StrictMode>
    <LivingPlaceRegistrationProvider>
      <App />
    </LivingPlaceRegistrationProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()