import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <App apikey={process.env.REACT_APP_PUBG_API_KEY}/>
  </BrowserRouter>,
  document.getElementById('root')
)
