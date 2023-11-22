import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import '@fortawesome/fontawesome-free/css/all.css'
import './style/style.css'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<ScrollToTop />
		<App />
	</BrowserRouter>
)
