import './App.css'
import {useState} from 'react'
import Olausuario from './components/Olausuario'
import Areaparaadultos from './components/Areaparaadultos'
import Login from './components/Login'

function App() {
  const [logado, setlogado] = useState(false)
  const [idade, setidade] = useState(0)
function logar(){
  setlogado(true)
}
  return (
    <>
       <div className="render-container">       
        <button onClick={logar}>logar</button>
        <button onClick={ () => setlogado(false) }>deslogar</button>
        <button onClick={ () => setlogado(!logado) }>alternar</button>
        { logado && <Olausuario /> }
       </div>
       <div className="render-container">

        <button onClick={() => setidade(idade - 1)}>-</button>
        {idade}
        <button onClick={() => setidade(idade + 1)}>+</button>
        { idade>=18 && <Areaparaadultos/> }
       </div>
       <div className="render-container">
        { logado==true ? <Olausuario/> : <Login/> }
       </div>
    </>
  )
}

export default App
