import { useState } from 'react'
import './App.css'

function App() {
  const [fila, setFila] = useState([])

  function gerarSenhanormal(){
    let senhanormal = {
      numero: Date.now(),
      tipo: "normal",
    }

    setFila([...fila, senhanormal])
  }

  function gerarSenhaPreferencial(){
    let senhapreferencial = {
      numero: Date.now(),
      tipo: "preferencial",
    }

    setFila([...fila, senhapreferencial])
  }

  function atender(){
    if(fila.length){
      alert(fila[0].numero)
      setFila(fila.slice(1))

    }else{
      alert("Não tem ninguem na fila")
    }
    
  }

  return (
    <>
      <button onClick={atender}> Atender </button>
      <button onClick={gerarSenhanormal}> Senha Normal </button>
      <button onClick={gerarSenhaPreferencial}> Senha Preferencial </button>
      {fila.map( (senhanormal) => (
          <div key={senhanormal.numero}>
            <p>{senhanormal.numero}</p>
            <p>{senhanormal.tipo}</p>
          </div>
      ) )}
    </>
  )
}

export default App
