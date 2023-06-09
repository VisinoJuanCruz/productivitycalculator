import { useState, useEffect } from 'react'
import "./Hardmode.css"

function Hardmode(){

    const [cantAuto, setCantAuto] = useState(0)
    const [itemAuto, setItemAuto] = useState(0)
    const [cantDLV, setCantDLV] = useState(0)
    const [itemDLV, setItemDLV] = useState(0)
    const [cantService, setCantService] = useState(0)
    const [itemService, setItemService] = useState(0)
    const [cantTotal, setCantTotal] = useState(0)
    const [itemTotal, setItemTotal] = useState(0)
    const [employeesKitchen,setEmployeesKitchen] = useState(1)
  
    const TABLEKITCHEN = ["Parrillero","Iniciador linea1","Ensamblador linea1","Iniciador Linea 2","Productos fritos","Ensamblador Linea 2","Parrillero", "Asistente Linea 1", "Asistente Linea 2","Productos fritos"]
    const TABLESERVICE = ["Cajero","Apoyo","Papas","Torre de bebidas","Apoyo","Cajero","Apoyo","Expedidor","Apoyo"]
    const TABLEAUTO = ["Cajero","Presentador","Corredor","Tomador de pedidos interno","Torre de bebidas","Tomador externo","Cajero","Corredor","Presentador"]
    const TABLEDELIVERY = ["Coordinador","Ensamblador","Presentador","Torre y postres","Ensamblador 2", "Verificador"]
    
   
     
  
    const submitHandler = (e) => {
      e.preventDefault();
          
      setCantAuto(e.currentTarget.cantAuto.valueAsNumber)
      setItemAuto(e.currentTarget.itemAuto.valueAsNumber)
      setCantDLV(e.currentTarget.cantDLV.valueAsNumber)
      setItemDLV(e.currentTarget.itemDLV.valueAsNumber)
      setCantService(e.currentTarget.cantService.valueAsNumber)
      setItemService(e.currentTarget.itemService.valueAsNumber)
      setCantTotal(cantAuto+cantDLV+cantService)
      setItemTotal(((itemService+itemAuto+itemDLV)/3) * (cantAuto+cantDLV+cantService));
      
     const thresholds = [39, 77, 125, 172, 210, 258, 369, 430];

      const updateEmployeesKitchen = () => {
        setEmployeesKitchen(prevEmployeesKitchen => prevEmployeesKitchen + 1);
      };

      for (const threshold of thresholds) {
        console.log(itemTotal)
        if ( ((itemService+itemAuto+itemDLV)/3) * (cantAuto+cantDLV+cantService) > threshold) {
          updateEmployeesKitchen();
        } else {
          break;
        }
      }
    }

    return (
      <>
        {cantTotal == 0 ?
        <div className="hardmode-form" >
          <h1>HARD MODE</h1>
        <form onSubmit={submitHandler}>
              <p>¿Cuántos GC's desea hacer en AutoMac?<input type="number" name="cantAuto" /></p>
              <p>¿Cuánto es el item promedio por ticket en AutoMac?<input type="number" step="0.01" name="itemAuto" /></p>
              <p>¿Cuántos GC's desea hacer en Delivery?<input type="number" name="cantDLV" /></p>
              <p>¿Cuánto es el item promedio por ticket en Delivery?<input type="number" step="0.01" name="itemDLV" /></p>
              <p>¿Cuántos GC's desea hacer en el servicio?<input type="number" name="cantService" /></p>
              <p>¿Cuánto es el item promedio por ticket en el servicio?<input type="number" step="0.01" name="itemService" /></p>           
                         
              <button className="btn btn-dark mx-2" //onClick={() => window.location.href = `/game/${gameId}/add-question`}
               type="submit">
              Enviar pregunta          
            </button>
          </form>
          </div>
        :
        <div>
          <div className="hardmode-info">
            
            <p>Para hacer los {cantTotal} GC's, se necesitan {Math.floor(cantTotal / 6)} crews</p>
            <p>La productividad daría un aproximado de 6</p>
            <p>Para eso vas a necesitar</p>
            <p>Empleados en cocina:  {Math.floor(employeesKitchen)} (Serían para hacer los {Math.floor(itemTotal) +1} items por hora)</p>
            <p>Empleados en servicio:  {Math.floor(cantService / 10)}  (Serían para hacer {Math.floor(cantService)} tickets)</p>
            <p>Empleados en automac:  {Math.floor(cantAuto /10) }  (Serían para hacer {Math.floor(cantAuto)} tickets)</p>
            <p>Empleados en delivery:  {Math.floor((cantDLV - 10)/10)}  (Serían para hacer {Math.floor(cantDLV)} tickets)</p>
            <p>Los crew que no están posicionados en cocina se pueden rotar de puesto a conveniencia</p>
          </div>
            <h1>Posicionamientos</h1>
            
            <div className="tables">
              <div className="tablepositions">
                <p>COCINA</p>
                <ol>
                  {
                    TABLEKITCHEN.slice(0,employeesKitchen).map((elem,index) => (<li key={index}>{elem}</li>))
                  }
                </ol>
              </div>
              
              <div className="tablepositions">
                <p>AUTOMAC</p>
                <ol>
                {
                  TABLEAUTO.slice(0,Math.floor(cantAuto /10)).map((elem,index) => (<li key={index}>{elem}</li>))
                }
              </ol>
              </div>
              
              <div className="tablepositions">
                <p>SERVICIO</p>
                <ol>
                  {
                    TABLESERVICE.slice(0,Math.floor(cantService / 10)).map((elem,index) => (<li key={index}>{elem}</li>))
                  }
                </ol>
              </div>
              <div className="tablepositions">
                <p>DELIVERY</p>
                <ol>
                {
                  TABLEDELIVERY.slice(0,Math.floor((cantDLV - 10)/10)).map((elem,index) => (<li key={index}>{elem}</li>))
                }
              </ol>
              </div>
              
              
              </div>
            </div>
          
          
          }
  
          
      </>
    )
  }

export default Hardmode