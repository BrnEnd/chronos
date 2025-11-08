import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App'

createRoot(document.getElementById('root')!).render( //Esse comando cria a raiz do React na div com id 'root' no HTML
  //O StrictMode é um componente que ajuda a identificar problemas potenciais na aplicação durante o desenvolvimento
  <StrictMode> 
    <App />
  </StrictMode>,
)
