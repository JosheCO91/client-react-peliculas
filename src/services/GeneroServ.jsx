
import { axiosConfg } from "../confg/axiosConfg";

const headers = { 'Content-Type': 'application/json' }

const crearGenero = (gn) => {
    const data = {
        nombre: gn.nombre,
        descripcion: gn.descripcion
    }
    return axiosConfg.post('/generos', data, { headers: headers })
}

const obtenerGenero = () => {
    return axiosConfg.get('/generos', {
        headers: headers
    })
}

const obtenerGeneroPorID = (id) => {
    return axiosConfg.get('/generos/'+id, {
        headers: headers
    })
}

const actualizarGenero = (gn, id) => {
    const data = {
        nombre: gn.nombre,
        descripcion: gn.descripcion
    }
    return axiosConfg.put('/generos/'+id, data, { headers: headers })
}

export {
    crearGenero,
    obtenerGenero,
    obtenerGeneroPorID,
    actualizarGenero
}