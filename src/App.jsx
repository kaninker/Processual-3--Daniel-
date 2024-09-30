import React, { useState } from 'react'
import './App.css'
import CardAluno from './Components/CardAluno';


function App() {

  return (
      <div className='app'>
        <h1>Situação dos Alunos:</h1>
        <div className='card-container'> 
          <CardAluno nome = "Maria Luiza" media = {7}/>
          <CardAluno nome = "João Victor" media = {3}/>
        </div>
      </div>
  )
}

export default App
