import React, { useState, useContext } from 'react'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContext'

function Cadastroproduto() {
    const {produto, setProduto} = useContext(GlobalContext)

    const[inputNome, setInputNome] = useState('')
    const[inputPreço, setInputPreço] = useState('')

    function cadastrarprodutos(){
        let produto = {
            id: Date.now(),
            nome: inputNome,
            preço: inputPreço,
        }
        setProduto([...produto])
    }
  return (
    <div>
        <Navbar />
      <h1>Cadastro de produtos</h1>
      <div className='input-container'>
        <label htmlFor="Nome:"> Nome </label>
        <input type="text" 
        value={inputNome}
        onChange={(n) => setInputNome(n.target.value)}
        />
      </div>
      <div className='input-container'>
        <label htmlFor="Preço:"> Preço </label>
        <input type="text" 
        value={inputPreço}
        onChange={(p) => setInputPreço(p.target.value)}
        />
      </div>
      <button onClick={cadastrarprodutos}>Cadastrar</button>
    </div>
  )
}

export default Cadastroproduto
