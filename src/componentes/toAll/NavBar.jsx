import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a>
                    <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"></img>
                    Bootstrap
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink
                            to="/"
                            className="nav-link"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/generos"
                            className="nav-link"
                        >
                            Generos
                        </NavLink>
                        <NavLink
                            to="/directores"
                            className="nav-link"
                        >
                            Directores
                        </NavLink>
                        <NavLink
                            to="/productoras"
                            className="nav-link"
                        >
                            Productoras
                        </NavLink>
                        <NavLink
                            to="/tipos"
                            className="nav-link"
                        >
                            Formatos
                        </NavLink>
                        <NavLink
                            to="/gestionar"
                            className="nav-link"
                        >
                            Gestionar
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
