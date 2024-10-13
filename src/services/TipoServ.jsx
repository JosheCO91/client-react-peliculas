import { axiosConfg } from "../confg/axiosConfg";

const headers = { 'Content-Type': 'application/json' }

const crearTipo = (tp) => {
    const data = {
        nombre: tp.nombre,
        descripcion: tp.descripcion
    }
    return axiosConfg.post('/tipos', data, { headers: headers })
}

const obtenerTipo = () => {
    return axiosConfg.get('/tipos', {
        headers: headers
    })
}

const obtenerTipoPorID = (id) => {
    return axiosConfg.get('/tipos/'+id, {
        headers: headers
    })
}

const actualizarTipo = (tp, id) => {
    const data = {
        nombre: tp.nombre,
        descripcion: tp.descripcion
    }
    return axiosConfg.put('/tipos/'+id, data, { headers: headers })
}

export {
    crearTipo,
    obtenerTipo,
    obtenerTipoPorID,
    actualizarTipo
}