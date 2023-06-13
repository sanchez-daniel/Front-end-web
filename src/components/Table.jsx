import { useEffect } from "react"
import { useState } from "react"

export function Table(){

  const [componentes, setComponentes] =  useState([])
  useEffect(()=>{
   async function fetchData (){
    const response = await fetch(`http://89.116.25.43:4000/api/components`);
    const data = await response.json()
    setComponentes(data.component)  
  } 
  fetchData()
  },[])

  
  return(
    <>
    
        <div className="p-5 h-screen bg-gray-100">
        <h1 className="text-xl mb-2">Mantenimiento</h1>
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">Id</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">Nombre</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">Color</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">Estado</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">Modelo</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">Marca</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">Linea</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">Descripcion</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">Categoria Id</th>
            </tr>
          </thead>
          <tbody id="data">
            {
              componentes.map((info)=>(
                <tr>
              <td>{info._id}</td>
              <td>{info.name}</td>
              <td>{info.color}</td>
              <td>{info.estado}</td>
              <td>{info.modelo}</td>
              <td>{info.marca}</td>
              <td>{info.linea}</td>
              <td>{info.descripcion}</td>
              <td>{info.categoryId._id}</td>
              </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}