import './Titulo.css'

function Titulo(props) {
  return (
    <div className='titulo-container'>
      <h1>{props.texto}</h1>
    </div>
  )
}

export default Titulo
