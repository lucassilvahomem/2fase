import React, { useState } from 'react'
import './Arcondicionado.css'
import { FaExchangeAlt } from "react-icons/fa";

function Arcondicionado() {
    const [inputCelcius, setimputCelsius] = useState('')
    const [inputFahrenheit, setimputFarenheit] = useState('')

    function mudouCelcius(event){
        setimputCelsius(event.target.value)
        let f = event.target.value * 1.8 + 32
        setimputFarenheit(f.toFixed(1))
    }
    function mudouFarenheit(event){
        let c = (event.target.value - 32 / 1.8).toFixed(1)
        setimputFarenheit(event.target.value)
        setimputFarenheit(c)
    }

  return (
  <div>
      <h1>exercicio 5.27</h1>
      <p> Ligar o ar condicionado: Faça um programa onde o usuário irá escolher se quer converter graus Celsius para Fahrenheit ou Fahrenheit para Celsius. Após a ecolha, faça uma leitura e converta para a unidade escolhida.</p>
    <div className='form-container'>
       <div className='input-container'>
       <label htmlFor="inpC">Celsius</label>
       <input type="number" id='inpC'
          value={inputCelcius}
          onChange={mudouCelcius}/> 
       </div>
       <div>
          <FaExchangeAlt />
       </div>
       <div className='input-container'>
       <label htmlFor="inpT">Farenheit</label>
       <input type="text" id="inpT"
          value={inputFahrenheit}
          onChange={mudouFarenheit}/> 
       </div>
    </div> 
  </div>
  )
}

export default Arcondicionado
