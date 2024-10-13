import React, { useEffect, useState } from 'react'
import { crearMedia, obtenerMedia } from '../../services/MediaServ'

export default function Medias() {

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

  useEffect(() => {
    lstMd()
  }, [])

  const lstMd = async () => {
    try {
      const { data } = await obtenerMedia()
      setMedias(data)
      console.log(data)
    } catch (e) {
      console.log(e)
    }

  }
  const guarMd = async () => {
    try {
      await crearMedia(media)
      lstMd()
    } catch (e) {
      console.log(e)
    }
  }
  const handleChange = (e) => {
    console.log(e.target)
    setMedia({
      ...media,
      [e.target.name]: e.target.value

    })

  }

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
  
  return (
    <>
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {medias.map((media) => (
          <div className="col" key={media._id}>
            <div className="card">
              <img
            src={media.imagen} // Aquí deberías tener la URL guardada de la imagen
            className="card-img-top"
            alt={media.titulo}
              />
              <div className="card-body">
                <h5 className="card-title">{media.titulo}</h5>
                <p className="card-text">{media.sinopsis}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    {console.log(media.imagen)}
    </>
  )
}
