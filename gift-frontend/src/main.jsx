import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store, { persistor } from './redux/Store.js'
import { PersistGate } from 'redux-persist/lib/integration/react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './features/CartSlice.jsx'

const store = configureStore({
    reducer:{
        cart: cartReducer
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            {/* <PersistGate loading={false} persistor={persistor}> */}
                <App />
            {/* </PersistGate> */}
        </Provider>
    </BrowserRouter>
)
