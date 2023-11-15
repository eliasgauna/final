import React from 'react'

import './App.scss'
import Titulo from './components/Titulo'
import Contenedor from './components/Contenedor'

function App() {
  
  return (
    
    <div className='App'>
      <Titulo TextoTitulo="Tu GYM App"/>
      <p>La aplicación que te permite organizar tu rutina</p>
      <Contenedor/>
    </div>
  )
}

export default App
