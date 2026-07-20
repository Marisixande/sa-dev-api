import { useState } from 'react'
import './App.css'
import Funcionarios from './components/NovoFuncionario.jsx'
import Departamentos from './components/NovoDepartamento.jsx'
import FuncDep from './components/NovoFuncDep.jsx'
import Equipamentos from './components/NovoEquipamento.jsx'
import Categorias from './components/NovoCategorias.jsx'
import EquipCateg from './components/NovoEquipCateg.jsx'
import Distribuicoes from './components/NovoDistribuicoes.jsx'

function App() {
  const [funcionarios, setFuncionarios] = useState([])
  const [departamentos, setDepartamentos] = useState([])
  const [funcionarios_departamentos, setFuncdep] = useState([])
  const [equipamentos, setEquipamentos] = useState([])
  const [categorias, setCategorias] = useState([])
  const [equipamentos_categorias, setEquipCateg] = useState([])
  const [distribuicoes, setDistribuicoes] = useState([])

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

  const getDepartamentos = async() => {
    try {
    const res = await fetch("http://localhost:3000/departamentos");
    const data = await res.json();
    console.log("Departamentos!", data);
    setDepartamentos(data);
    
  } catch (error) {
    console.log(error)
  }
  }
  const getFuncdep = async() => {
    try {
    const res = await fetch("http://localhost:3000//funcionarios_departamentos");
    const data = await res.json();
    console.log("Funcdep!", data);
    setFuncdep(data);
    
  } catch (error) {
    console.log(error)
  }
  }
  const getEquipamentos = async() => {
    try {
    const res = await fetch("http://localhost:3000/equipamentos");
    const data = await res.json();
    console.log("Equipamentos!", data);
    setEquipamentos(data);
    
  } catch (error) {
    console.log(error)
  }
  }
  const getCategorias = async() => {
    try {
    const res = await fetch("http://localhost:3000/categorias");
    const data = await res.json();
    console.log("Categorias!", data);
    setCategorias(data);
    
  } catch (error) {
    console.log(error)
  }
  }
  const getEquipCateg = async() => {
    try {
    const res = await fetch("http://localhost:3000/equipamentos_categorias");
    const data = await res.json();
    console.log("EquipCateg!", data);
    setEquipCateg(data);
    
  } catch (error) {
    console.log(error)
  }
  }
  const getDistribuicoes = async() => {
    try {
    const res = await fetch("http://localhost:3000/distribuicoes");
    const data = await res.json();
    console.log("Distribuicoes!", data);
    setDistribuicoes(data);
    
  } catch (error) {
    console.log(error)
  }
  }

   useEffect(() => {
    getFuncionarios()
  }, [])

   useEffect(() => {
    getDepartamentos()
  }, [])

   useEffect(() => {
    getFuncdep()
  }, [])

   useEffect(() => {
    getEquipamentos()
  }, [])

   useEffect(() => {
    getCategorias()
  }, [])

   useEffect(() => {
    getEquipCateg()
  }, [])
   useEffect(() => {
    getDistribuicoes()
  }, [])

  return (
    <>
    <div>
      <Funcionarios />
      <main>
        {funcionarios.length > 0 ? (funcionarios.map((funcionario) => (
          <FuncComponent key={funcionario.id} data={funcionario} />
        ))) : <div>Carregando....</div>}
      </main>
    </div>
    <div>
      <Departamentos />
      <main>
        {departamentos.length > 0 ? (departamentos.map((departamento) => (
          <DepComponent key={departamento.id} data={departamento} />
        ))) : <div>Carregando....</div>}
      </main>
    </div>
    <div>
      <FuncDep />
      <main>
        {funcionarios_departamentos.length > 0 ? (funcionarios_departamentos.map((funcdep) => (
          <FuncDepComponent key={funcdep.id} data={funcdep} />
        ))) : <div>Carregando....</div>}
      </main>
    </div>
    <div>
      <Equipamentos />
      <main>
        {equipamentos.length > 0 ? (equipamentos.map((equipamento) => (
          <EquipComponent key={equipamento.id} data={equipamento} />
        ))) : <div>Carregando....</div>}
      </main>
    </div>
    <div>
      <Categorias />
      <main>
        {categorias.length > 0 ? (categorias.map((categoria) => (
          <CategComponent key={categoria.id} data={categoria} />
        ))) : <div>Carregando....</div>}
      </main>
    </div>
    <div>
      <EquipCateg />
      <main>
        {equipamentos_categorias.length > 0 ? (equipamentos_categorias.map((equipcateg) => (
          <EquipCategComponent key={equipcateg.id} data={equipcateg} />
        ))) : <div>Carregando....</div>}
      </main>
    </div>
    <div>
      <Distribuicoes />
      <main>
        {distribuicoes.length > 0 ? (distribuicoes.map((distribuicao) => (
          <DistriComponent key={distribuicao.id} data={distribuicao} />
        ))) : <div>Carregando....</div>}
      </main>
    </div>
    </>
  )
}

export default App
