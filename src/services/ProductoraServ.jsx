import { axiosConfg } from "../confg/axiosConfg";

const headers = { 'Content-Type': 'application/json' }

const crearProductora = (pr) => {
    const data = {
        nombre: pr.nombre,
        slogan: pr.slogan,
        descripcion: pr.descripcion
    }
    return axiosConfg.post('/productoras', data, { headers: headers })
}

const obtenerProductora = () => {
    return axiosConfg.get('/productoras', {
        headers: headers
    })
}

const obtenerProductoraPorID = (id) => {
    return axiosConfg.get('/productoras/'+id, {
        headers: headers
    })
}

const actualizarProductora = (pr, id) => {
    const data = {
        nombre: pr.nombre,
        slogan: pr.slogan,
        descripcion: pr.descripcion
    }
    return axiosConfg.put('/productoras/'+id, data, { headers: headers })
}

export {
    crearProductora,
    obtenerProductora,
    obtenerProductoraPorID,
    actualizarProductora
}