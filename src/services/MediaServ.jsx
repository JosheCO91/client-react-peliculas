import { axiosConfg } from "../confg/axiosConfg";

const headers = { 'Content-Type': 'application/json' }

const crearMedia = (md) => {
    const data = {
        nombre: md.nombre,
        descripcion: md.descripcion
    }
    return axiosConfg.post('/medias', data, { headers: headers })
}

const obtenerMedia = () => {
    return axiosConfg.get('/medias', {
        headers: headers
    })
}

const obtenerMediaPorID = (id) => {
    return axiosConfg.get('/medias/'+id, {
        headers: headers
    })
}

const actualizarMedia = (md, id) => {
    const data = {
        nombre: md.nombre,
        descripcion: md.descripcion
    }
    return axiosConfg.put('/medias/'+id, data, { headers: headers })
}

export {
    crearMedia,
    obtenerMedia,
    obtenerMediaPorID,
    actualizarMedia
}