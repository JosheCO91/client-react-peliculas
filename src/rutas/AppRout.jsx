import React from 'react'
import Footer from '../componentes/toAll/Footer'
import Medias from '../componentes/mmedias/Medias'
import NavBar from '../componentes/toAll/NavBar'
import { Route, Routes } from 'react-router-dom'
import Generos from '../componentes/generos/Generos'
import Directores from '../componentes/directores/Directores'
import Productoras from '../componentes/productoras/Productoras'
import Tipos from '../componentes/tipos/Tipos'
import GestionMulMedias from '../componentes/mmedias/GestionMulMedias'
import NoFound from '../componentes/toAll/NoFound'


export default function AppRout() {
  return (
    <>
      <main className='container'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Medias />} />
          <Route path='/generos' element={<Generos />} />
          <Route path='/directores' element={<Directores />} />
          <Route path='/productoras' element={<Productoras />} />
          <Route path='/tipos' element={<Tipos />} />
          <Route path='/gestionar' element={<GestionMulMedias />} />
          <Route path='*' element={<NoFound />} />
        </Routes>
        <Footer />
      </main>
    </>
  )
}
