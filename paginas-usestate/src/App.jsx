import { useState } from 'react'
import './App.css'
import Contato from './Pages/Contato'
import Home from './Pages/Home'
import Meuslegos from './Pages/Meuslegos'

function App() {
const [pagina, setpagina] = useState(<Home />)

  return (
    <>
      <nav>
        <button onClick={ () => setpagina(<Home />)}>home</button>
        <button onClick={ () => setpagina(<Contato />)}>contato</button>
        <button onClick={ () => setpagina(<Meuslegos />)}>legos</button>
      </nav>
      { pagina }
    </>
  )
}

export default App
