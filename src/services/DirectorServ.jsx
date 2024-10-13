import { axiosConfg } from "../confg/axiosConfg";

const headers = { 'Content-Type': 'application/json' }

const crearDirector = (dr) => {
    const data = {
        nombre: dr.nombre
    }
    return axiosConfg.post('/directores', data, { headers: headers })
}

const obtenerDirector = () => {
    return axiosConfg.get('/directores', {
        headers: headers
    })
}

const obtenerDirectorPorID = (id) => {
    return axiosConfg.get('/directores/'+id, {
        headers: headers
    })
}

const actualizarDirector = (dr, id) => {
    const data = {
        nombre: dr.nombre
    }
    return axiosConfg.put('/directores/'+id, data, { headers: headers })
}

export {
    crearDirector,
    obtenerDirector,
    obtenerDirectorPorID,
    actualizarDirector
}