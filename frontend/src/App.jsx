import { useState } from 'react'
import './App.css'
import Funcionarios from './components/Funcionarios'

function App() {
  const [funcionariosA, setFuncionarios] = useState([])

  const getFuncionarios = async() => {
    try {
    const res = await fetch("http://localhost:3000/funcionarios");
    const data = await res.json();
    console.log("Funcionarios!", data);
    setFuncionarios(data);
    
  } catch (error) {
    console.log(error)
  }
  }
  return (
    <>
       <div>
      <button onClick={getFuncionarios}>Trazer dados dos funcionarios</button>
      <Funcionarios funcionariosB={funcionariosA}/>
    </div>
    </>
  )
}

export default App
