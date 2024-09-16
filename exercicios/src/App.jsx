import './App.css'
import { useState } from 'react'
import Arcondicionado from './pages/Arcondicionado'
import Porquinho from './pages/porquinho'

function App() {
  const [pagina, setPagina] = useState()

  return (
    <>
    <nav>
      <button onClick={() => setPagina(<Arcondicionado/>)}>5.27</button>
      <button onClick={() => setPagina(<Porquinho/>)}>5.25</button>
    </nav>
      { pagina }
    </>
  )
}

export default App
