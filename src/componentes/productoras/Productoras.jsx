import React, { useEffect, useState } from 'react'
import { crearProductora, obtenerProductora } from '../../services/ProductoraServ'
import Modal from '../toAll/Modal'
import Table from '../toAll/Table'

export default function Productoras() {

  const [productoras, setProductoras] = useState([])
  const [productora, setProductora] = useState({
    nombre: '',
    slogan: '',
    descripcion: ''
  })
    
  useEffect(() => {
    lstPrd()
  }, [])

  const lstPrd = async () => {
    try {
      const { data } = await obtenerProductora()
      setProductoras(data)
    } catch (e) {
      console.log(e)
    }

  }

  const guarPr = async () => {
    try {
      await crearProductora(productora)
      lstPrd()
    } catch (e) {
      console.log(e)
    }
  }
const handleChange = (e) => {
  console.log(e.target)
  setProductora({
    ...productora, 
      [e.target.name] : e.target.value
})
}

const atributosPr = [
  { name: "nombre", label: "Nombre", type: "text" },
  { name: "slogan", label: "Eslogan", type: "textarea" },
  { name: "descripcion", label: "Descripción", type: "textarea" }
]
const columnasPr = [
  { label: 'Nombre', accessor: 'nombre' },
  { label: 'Eslogan', accessor: 'slogan' },
  { label: 'Descripción', accessor: 'descripcion' },
  { label: 'Fecha de Creación', accessor: 'fechaCreacion' }
];
  return (
    <>
    <Modal 
      title={'Productora'}
      atributos={atributosPr}
      guardar={guarPr}
      handleChange={handleChange}
      values={productora}
    />
    <Table 
      title='Productoras'
      columnas={columnasPr}
      datos={productoras}
    />
    </>
  )
}
