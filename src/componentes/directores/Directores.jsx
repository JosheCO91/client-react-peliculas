import React, { useEffect, useState } from 'react'
import { crearDirector, obtenerDirector } from '../../services/DirectorServ'
import Modal from '../toAll/Modal'
import Table from '../toAll/Table'

export default function Directores() {

  const [directores, setDirectores] = useState([])
  const [director, setDirector] = useState({
    nombre: ''
  })

  useEffect(() => {
    lstDrt()
  }, [])

  const lstDrt = async () => {
    try {
      const { data } = await obtenerDirector()
      setDirectores(data)
    } catch (e) {
      console.log(e)
    }
  }

  
  const guarDir = async () => {
    try {
      await crearDirector(director)
      lstDrt()
    } catch (e) {
      console.log(e)
    }
  }
const handleChange = (e) => {
  console.log(e.target)
  setDirector({
    ...director, 
      [e.target.name] : e.target.value
})
}

const atributosDrt = [
  { name: 'nombre', label: 'Nombre', type: 'text' }
]

const columnasDrt = [
  { label: 'Nombre', accessor: 'nombre' },
  { label: 'Fecha de Creación', accessor: 'fechaCreacion' }
]



  return (
    <>
    <Modal 
      title={'Director'}
      atributos={atributosDrt}
      guardar={guarDir}
      handleChange={handleChange}
      values={director}
    />
    <Table 
      title={'Directores'}
      columnas={columnasDrt}
      datos={directores}
    />
    </>
  )
}