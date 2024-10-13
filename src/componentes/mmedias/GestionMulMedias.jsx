import React, { useEffect, useState } from 'react'
import { crearMedia, obtenerMedia } from '../../services/MediaServ'
import { obtenerGenero } from '../../services/GeneroServ'
import { obtenerDirector } from '../../services/DirectorServ'
import { obtenerProductora } from '../../services/ProductoraServ'
import { obtenerTipo } from '../../services/TipoServ'
import Modal from '../toAll/Modal'
import Table from '../toAll/Table'
export default function GestionMulMedias() {

  const [medias, setMedias] = useState([])
  const [media, setMedia] = useState({
    titulo: '',
    sinopsis: '',
    imagen: '',
    fechaEstreno: '',
    genero: '',
    director: '',
    productora: '',
    tipo: ''

  })
  const [generos, setGeneros] = useState([]);
const [directores, setDirectores] = useState([]);
const [productoras, setProductoras] = useState([]);
const [tipos, setTipos] = useState([])

  useEffect(() => {
    lstMd()
  }, [])

  const lstMd = async () => {
    try {
      const { data } = await obtenerMedia()
      setMedias(data)
    } catch (e) {
      console.log(e)
    }

  }
  const guarMd = async () => {
    try {
      const data = {
        ...media,
        genero: media.genero, // Aquí debe ir el ID seleccionado
        director: media.director,
        productora: media.productora,
        tipo: media.tipo
      };
      await crearMedia(data)
      lstMd()
    } catch (e) {
      console.log(e)
    }
  }
const handleChange = (e) => {
  console.log(e.target)
  setMedia({
    ...media, 
      [e.target.name] : e.target.value
    
})

}
const atributosMd = [
  { name: "titulo", label: "Título", type: "text" },
  { name: "sinopsis", label: "Sinopsis", type: "textarea" },
  { name: "imagen", label: "Imagen", type: "text" },
  { name: "fechaEstreno", label: "Fecha de estreno", type: "date" },
  { name: "genero", label: "Género", type: "select", options: generos }, 
  { name: "director", label: "Director", type: "select", options: directores },
  { name: "productora", label: "Productora", type: "select", options: productoras },
  { name: "tipo", label: "Formato", type: "select", options: tipos },
]
const columnasMd = [
  { label: 'Título', accessor: 'titulo' },
  { label: 'Sinopsis', accessor: 'sinopsis' },
  { label: "Imagen", accessor: "imagen" },
  { label: "Fecha de estreno", accessor: "fechaEstreno" },
  { label: "Género", accessor: "genero" },
  { label: "Director", accessor: "director" },
  { label: "Productora", accessor: "productora" },
  { label: "Formato", accessor: "tipo" },
  { label: 'Fecha de Creación', accessor: 'fechaCreacion' }
]


useEffect(() => {
  cargarDatosRelacionados();
}, []);

const cargarDatosRelacionados = async () => {
  try {
    const { data: generosData } = await obtenerGenero();  // Asegúrate de que obtienes los datos correctamente
    const { data: directoresData } = await obtenerDirector();
    const { data: productorasData } = await obtenerProductora();
    const { data: tiposData } = await obtenerTipo();

    setGeneros(generosData);   // Aquí data debe ser un arreglo
    setDirectores(directoresData);
    setProductoras(productorasData);
    setTipos(tiposData);
  } catch (e) {
    console.log(e);
  }
};



  return (
    <>
    <Modal 
      title={'Multimedia'}
      atributos={atributosMd}
      guardar={guarMd}
      handleChange={handleChange}
      values={media}
    />
    <Table 
      title='Multimedias'
      columnas={columnasMd}
      datos={medias}
    />
    </>
  )
}
