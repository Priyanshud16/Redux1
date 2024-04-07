import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from '../store.js'
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvider from './AuthContext/Auth.jsx'
import { ChakraProvider } from "@chakra-ui/react";



ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <BrowserRouter>
   <AuthContextProvider>
    <ChakraProvider>
   <App />
   </ChakraProvider>
   </AuthContextProvider>
    </BrowserRouter>
</Provider>
)
