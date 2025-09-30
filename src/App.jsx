import {  } from 'react'

import './App.css'
import SimpleFrom from './Components/SimpleFrom/SimpleFrom'
import FromAction from './Components/FromAction/FromAction'
import ControlledField from './Components/ControlledField/ControlledField'

function App() {


  return (
    <>
     
    
      <h1>Explore React Form</h1>

      <SimpleFrom></SimpleFrom>
      <h2>Action From</h2>

      <FromAction></FromAction>

      <h1>Controlled Field</h1>
      <ControlledField></ControlledField>
     
        
      
    </>
  )
}

export default App
