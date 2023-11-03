import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './component/ScrollToTop.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
)
