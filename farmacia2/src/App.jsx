import { useState } from 'react'
import './App.css'

function App() {
  const [fila, setFila] = useState([])

  function gerarSenha(){
    let senha = {
      numero: Date.now(),
      tipo: "normal",
    }

    setFila([...fila, senha])
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
      <button onClick={gerarSenha}> Senha Normal </button>
      <button onClick={gerarSenhaPreferencial}> Senha Preferencial </button>
      {fila.map( (senha) => (
          <div key={senha.numero}>
            <p>{senha.numero}</p>
            <p>{senha.tipo}</p>
          </div>
      ) )}
    </>
  )
}

export default App
