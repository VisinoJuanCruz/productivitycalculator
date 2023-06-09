import { useState } from 'react'
import './App.css'
import Hardmode from './Hardmode.jsx'
import Fastmode from './Fastmode.jsx'

function App() {
  
  const [checked, setChecked] = useState(false)
  const TABLEKITCHEN = ["Parrillero","Iniciador linea1","Ensamblador linea1","Iniciador Linea 2","Productos fritos","Ensamblador Linea 2", "Asistente Linea 1", "Asistente Linea 2","Parrillero","Productos fritos"]
  const TABLESERVICE = ["Cajero","Apoyo","Papas","Torre de bebidas","Apoyo","Cajero","Apoyo","Expedidor","Apoyo"]
  const TABLEAUTO = ["Cajero","Presentador","Corredor","Tomador de pedidos interno","Torre de bebidas","Tomador externo","Cajero","Corredor","Presentador"]
  const TABLEDELIVERY = ["Cajero","Corredor","Presentador","Torre","Corredor"]
  




  return (
    <div className="app">  
    <h1>Calculadora para la productividad</h1>
      <p className="mode-selector">Hard Mode  <input className="isImage" type="checkbox" name="isImage" onClick={() => setChecked(!checked)} /></p>
      { checked ? <Fastmode /> : <Hardmode /> }
    </div>
  )
}

export default App
