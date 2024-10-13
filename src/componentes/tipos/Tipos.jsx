import React, { useEffect, useState } from 'react'
import { crearTipo, obtenerTipo } from '../../services/TipoServ'
import Modal from '../toAll/Modal'
import Table from '../toAll/Table'

export default function Tipos() {

  const [tipos, setTipos] = useState([])
  const [tipo, setTipo] = useState({
    nombre: '',
    descripcion: ''
  })

  useEffect(() => {
    lstTp()
  }, [])

  const lstTp = async () => {
    try {
      const { data } = await obtenerTipo()
      setTipos(data)
    } catch (e) {
      console.log(e)
    }

  }

  const guarTp = async () => {
    try {
      await crearTipo(tipo)
      lstTp()
    } catch (e) {
      console.log(e)
    }
  }
const handleChange = (e) => {
  console.log(e.target)
  setTipo({
    ...tipo, 
      [e.target.name] : e.target.value
})
}
const atributosTp = [
  { name: "nombre", label: "Nombre", type: "text" },
  { name: "descripcion", label: "Descripción", type: "textarea" }
]
const columnasTp = [
  { label: 'Nombre', accessor: 'nombre' },
  { label: 'Descripción', accessor: 'descripcion' },
  { label: 'Fecha de Creación', accessor: 'fechaCreacion' }
]
  return (
    <>
    <Modal 
      title={'Formato'}
      atributos={atributosTp}
      guardar={guarTp}
      handleChange={handleChange}
      values={tipo}
    />
    <Table 
    title='Formatos'
    columnas={columnasTp}
    datos={tipos}
    />
    </>
  )
}
