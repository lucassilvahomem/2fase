import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div class='container'>
    <div class='topo'>
      <div class='topoesquerda'>
        <img src="arrow_left.png" alt="" />
      </div>

      <div class='topodireita'>
        <label> Conquistas </label>
      </div>

    </div>
    <div class='centro'>
        <div class='centrocima'>
          <label> conquista 1 </label>
          <label> conquista 2 </label>
          <label> conquista 3 </label>
          <label> conquista 4 </label>
          <label> conquista 5 </label>
        </div>
        <div class='centrobaixo'>
          <label> conquista 6 </label>
          <label> conquista 7 </label>
          <label> conquista 8 </label>
          <label> conquista 9 </label>
          <label> conquista 10 </label>
        </div>
        
    </div>
  </div>
  )
}

export default App
