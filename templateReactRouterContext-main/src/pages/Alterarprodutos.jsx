import React, { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import Navbar from '../components/Navbar'

function Alterarprodutos() {
    const {produtoMagico, setProdutoMagico} = useContext(GlobalContext)
    const [inputProduto, setInputProduto] = useState('')
    function atualizarProduto(){
        setProdutoMagico(inputProduto)
    }

  return (
    <div>
        <Navbar />
      <h1> Alteração mágica </h1>
      <p>produto atual: {produtoMagico}</p>
      <div className='input-container'>
        <label htmlFor="">Produto novo:</label>
        <input type="text" 
        value={inputProduto}
        onChange={(event) => setInputProduto(event.target.value)}
        />
      </div>
      <button onClick={atualizarProduto}>Alterar</button>
    </div>
  )
}

export default Alterarprodutos
