import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// existe uma exclamação após o root como uma forma de garantir que aquele elemento que está sendo pego não é nulo, pois sendo nulo, não teria como executar nada. Isso é uma característica do typescript.
// outra forma de fazer a mesma coisas é escrever "('root') as Html"

// o .StrictMode verifica se a aplicação não tem nenhum erro