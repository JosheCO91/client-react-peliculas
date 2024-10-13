import React from 'react'

export default function Modal({ title, atributos = [], guardar, handleChange, values }) {
    return (
        <>
            <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                    Agregar nuevo ítem
                </button>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Nuevo {title}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                {atributos.map((atr, index) => (
                                    <div className="mb-3" key={index}>
                                        <label htmlFor={atr.name} className="col-form-label">
                                            {atr.label}
                                        </label>
                                        {atr.type === 'textarea' ? (
                                            <textarea
                                                className="form-control"
                                                id={atr.name}
                                                name={atr.name}
                                                onChange={handleChange}
                                            ></textarea>
                                        ) : atr.type === 'select' ? (
                                            <select
                                                className="form-control"
                                                id={atr.name}
                                                name={atr.name}
                                                onChange={handleChange}
                                                value={values[atr.name]} // Asegúrate de manejar el valor
                                            >
                                                <option value="">Selecciona {atr.label}</option>
                                                {atr.options.map((option) => (
                                                    <option key={option._id} value={option._id}>
                                                        {option.nombre} {/* Ajusta a lo que quieres mostrar */}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : (
                                            <input
                                                type={atr.type}
                                                className="form-control"
                                                id={atr.name}
                                                name={atr.name}
                                                onChange={handleChange}
                                            />
                                        )}
                                    </div>
                                ))}
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button onClick={guardar} type="button" class="btn btn-primary">
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
