import { useState } from 'react'
import './Fastmode.css'

function Fastmode(){
    const [itemAvg, setItemAvg] = useState(0)
    const [cantEmployees, setCantEmployees] = useState(0)
    const [cantProduc, setCantProduc] = useState(0)
    const [employeesKitchen, setEmployeesKitchen] = useState(1)
   

    const TABLEKITCHEN = ["Parrillero","Iniciador linea1","Ensamblador linea1","Iniciador Linea 2","Productos fritos","Ensamblador Linea 2","Parrillero", "Asistente Linea 1", "Asistente Linea 2","Productos fritos"]
    const TABLESERVICE = ["Cajero","Apoyo","Papas","Torre de bebidas","Apoyo","Cajero","Apoyo","Expedidor","Apoyo"]
    const TABLEAUTO = ["Cajero","Presentador","Corredor","Tomador de pedidos interno","Torre de bebidas","Tomador externo","Cajero","Corredor","Presentador"]
    const TABLEDELIVERY = ["Cajero","Corredor","Presentador","Torre","Corredor"]


    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e.currentTarget.cantEmployees.value,"el valor")
            
        setCantEmployees(e.currentTarget.cantEmployees.value)
        setItemAvg(e.currentTarget.itemAvg.value)
        setCantProduc(e.currentTarget.cantProduc.value)

        const thresholds = [39, 77, 125, 172, 210, 258, 369, 430];

        const updateEmployeesKitchen = () => {
          setEmployeesKitchen(prevEmployeesKitchen => prevEmployeesKitchen + 1);
        };
  
        for (const threshold of thresholds) {
          console.log(threshold)
          console.log(itemAvg)
          console.log(cantEmployees)
          if ( itemAvg * (cantEmployees*cantProduc) > threshold) {
            console.log("ENTRA?")
            updateEmployeesKitchen();
          } else {
            break;
          }
        }

     }
  
  return (
    <>
      {cantEmployees  == 0 ? 
      <div className="fastmode-form">
      <h1>FAST MODE</h1>
      <form onSubmit={submitHandler}>
            <p>Cuantos empleados tiene?<input name="cantEmployees" /></p>
            <p>Cuantos items promedio vende por ticket?<input name="itemAvg" /></p>
            <p>Cuanto quiere que dé la productividad?<input name="cantProduc" /></p>            
                       
            <button className="btn btn-dark mx-2" //onClick={() => window.location.href = `/game/${gameId}/add-question`}
             type="submit">
            Enviar pregunta          
          </button>
        </form>
      </div>
        :
        <div className="fastmode-info">
          
          <p>Para que la productividad dé, se deben hacer un total de {cantEmployees*cantProduc} GC's</p>
          <p>Para hacer esa cantidad de tickets, vas a vender aproximadamente {(cantEmployees*cantProduc)*itemAvg} items</p>
          <p>Para eso vas a necesitar:</p>
          <p>Empleados en cocina: {employeesKitchen}</p>
          <p>Los crew que no están posicionados en cocina se pueden rotar de puesto a conveniencia</p>
         

        </div>
        

    }   
        
    </>
  )
}

export default Fastmode;