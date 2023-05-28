import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Fase 5 - Operar</h1>
      <h2>Integrantes</h2>
      <h3>Sergio Hernando Correal Balcázar</h3>

      <div className="card">
       
        <p>
          <a href="https://neon-truffle-b0ef9c.netlify.app/">Enlace Proyecto Grupal</a>
        </p>
        

        <p>
          <h3>UNAD</h3>
          <h3>Univesidad Nacional Abierta y Distancia</h3>
          <h3>Mayo 2023</h3>
        </p>



      </div>
      <p className="read-the-docs">
        <h1></h1>
      </p>
    </>
  )
}

export default App
