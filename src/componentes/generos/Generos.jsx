import React, { useEffect, useState } from 'react'
import { crearGenero, obtenerGenero } from '../../services/GeneroServ'
import Modal from '../toAll/Modal'
import Table from '../toAll/Table'

export default function Generos() {

  const [generos, setGeneros] = useState([])
  const [genero, setGenero] = useState({
    nombre: '',
    descripcion: ''
  })

  useEffect(() => {
    lstGenr()
  }, [])

  const lstGenr = async () => {
    try {
      const { data } = await obtenerGenero()
      setGeneros(data)
    } catch (e) {
      console.log(e)
    }

  }
  const guarGen = async () => {
    try {
      await crearGenero(genero)
      lstGenr()
    } catch (e) {
      console.log(e)
    }
  }
const handleChange = (e) => {
  console.log(e.target)
  setGenero({
    ...genero, 
      [e.target.name] : e.target.value
    
})

}
const atributosGn = [
  { name: "nombre", label: "Nombre", type: "text" },
  { name: "descripcion", label: "Descripción", type: "textarea" }
]
const columnasGn = [
  { label: 'Nombre', accessor: 'nombre' },
  { label: 'Descripción', accessor: 'descripcion' },
  { label: 'Fecha de Creación', accessor: 'fechaCreacion' }
];
  return (
    <>
      <Modal 
        title={'Género'}
        atributos={atributosGn}
        guardar={guarGen}
        handleChange={handleChange}
        values={genero}
      />
    <Table 
    title='Géneros'
    columnas={columnasGn}
    datos={generos}
    />
    </>
  )
}
