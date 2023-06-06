import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/bootstrap.css'

import App from './App.jsx'
import { Provider } from 'react-redux'
import Store from './redux/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
        <Provider store={ Store }>
            <App />
        </Provider>
    // </React.StrictMode>,
)
