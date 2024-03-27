import React from 'react' //importação da biblioteca react
import ReactDOM from 'react-dom/client' //renderizar conteudo
import App from './App.jsx' // conteudo principal


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
