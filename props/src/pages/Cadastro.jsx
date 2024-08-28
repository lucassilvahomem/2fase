import Titulo from "../components/Titulo"
import './Cadastro.css'
function Cadastro() {
    function cadastrar(){
        alert("Cadastrado")
    }
    return (
      <div className="cadastro-container">
        <Titulo texto={"Cadastro"} emoji={"👓"}/>
        <label> nome </label>
        <input type="text" />
        <label> altura </label>
        <input type="text" />
        <button onClick={cadastrar}> cadastrar </button>
      </div>
    )
  }
  
  export default Cadastro