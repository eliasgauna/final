import React from 'react'

import './App.scss'
import Titulo from './components/Titulo'
import Contenedor from './components/Contenedor'
import Footer from './components/Footer'
function App() {
  
  return (
    
    <div className='App'>
      <Titulo TextoTitulo="Tu GYM App"/>
      <p>La aplicación que te permite organizar tu rutina</p>
      <Contenedor/>
      <Footer/>
    </div>
  )
}

export default App
