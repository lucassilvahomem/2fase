import React, { useState } from 'react'
import Temdinheiro from '../componentes/Temdinheiro'
import Faltadinheiro from '../componentes/Faltadinheiro'

function porquinho() {
    const [inputpreço, setInputpreço] = useState('')
    const [input1real, setInput1real] = useState('')
    const [input50cent, setInput50cent] = useState('')
    const [input25cent, setInput25cent] = useState('')
    const [input10cent, setInput10cent] = useState('')
    const [input5cent, setInput5cent] = useState('')
    const [sobrou, setSobrou] = useState(false)
    const [faltou, setFaltou] = useState(false)

    function quebrarPorco() {
        let dinheiro = Number(input1real) + input50cent*0.5 + input25cent*0.25 +
        input10cent*0.10 + input5cent*0.05
        if(dinheiro >= inputpreço){
           setSobrou(true)
           setFaltou(false)
           }else{
            setFaltou(true)
            setSobrou(false)
           }
    }
  return (
    <div>
      <h1>5.25 - porquinho</h1>
      <p>O porco: Faça um programa que leia o valor de um produto X e leia a quantidade de moedas de um cofrinho que contenha:  N moedas de 1 real;  N moedas de 50 centavos;  N moedas de 25 centavos;  N moedas de 10 centavos;  N moedas de 5 centavos; O programa deverá verificar se o total de reais que contem no cofrinho é o bastante para compra o produto x.</p>


        <div className='input-container'>
            <label htmlFor="inpIreal">preço</label>
            <input type="number" id='inpIpreço'
            value={inputpreço}
            onChange={(event) => setInputpreço(event.target.value)}
            />
        </div>
       <div className='form-container'>
        <div className='input-container'>
            <label htmlFor="inpIreal">R$1,00</label>
            <input type="number" id='inpIreal'
            value={input1real}
            onChange={(event) => setInput1real(event.target.value)}
            />
        </div>
        <div className='input-container'>
            <label htmlFor="inpIreal">R$0,50</label>
            <input type="number" id='inpIreal'
            value={input50cent}
            onChange={(event) => setInput50cent(event.target.value)}
            />
        </div>
        <div className='input-container'>
            <label htmlFor="inpIreal">R$0,25</label>
            <input type="number" id='inpIreal'
            value={input25cent}
            onChange={(event) => setInput25cent(event.target.value)}
            />
        </div>
        <div className='input-container'>
            <label htmlFor="inpIreal">R$0,10</label>
            <input type="number" id='inpIreal'
            value={input10cent}
            onChange={(event) => setInput10cent(event.target.value)}/>
        </div>
        <div className='input-container'>
            <label htmlFor="inpIreal">R$0,05</label>
            <input type="number" id='inpIreal'
            value={input5cent}
            onChange={(event) => setInput5cent(event.target.value)}
            />
        </div>
       </div>
        <button onClick={quebrarPorco}>quebrar porco</button>
        {sobrou && <Temdinheiro/>}
        {faltou && <Faltadinheiro/>}
    </div>
  )
}

export default porquinho
