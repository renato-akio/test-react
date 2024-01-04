import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./pages/home/index.jsx"
import GlobalStyles from "./styles/globalStyles.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Home />
  </React.StrictMode>,
)
