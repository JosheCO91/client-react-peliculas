import React from 'react'

export default function Table({ title = '', columnas, datos = [] }) {

    return (
        <>
            <div>
                <h2 className='display-3'>{title}</h2>
            </div>
            <div className='container'>
                <table class="table caption-top">
                    <caption>Lista de {title}</caption>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            {columnas.map((columna, index) => (
                                <th scope="col" key={index}>
                                    {columna.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {datos.length > 0 ? (
                            datos.map((dato, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    {columnas.map((columna, colIndex) => (
                                        <td key={colIndex}>{typeof dato[columna.accessor] === 'object' && dato[columna.accessor] !== null
                                            ? dato[columna.accessor].nombre || JSON.stringify(dato[columna.accessor])  // Mostrar la propiedad "nombre" o el objeto completo si no tiene "nombre"
                                            : dato[columna.accessor]}</td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={columnas.length + 1}>No hay datos disponibles</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}
