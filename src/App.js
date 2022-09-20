import React from 'react';
import {useState} from 'react';
import './App.css';

export default function App() {
  const[nombre ,setName]=useState();
  const[apellido ,setApellido]=useState();
  const[apodo ,setApodo]=useState();

  const isDisabledName = nombre!== undefined && nombre !== "";
  const isDisabledApellido = apellido!== undefined && apellido !== "";
  const isDisabledApodo = apodo!== undefined && apodo !== "";
  
const isDisableGlobal = isDisabledName && isDisabledApellido && isDisabledApodo;

  const limpiar =()=>{
    setName('');
    setApellido('');
    setApodo('');
  }
  const cambioNombre=(event)=>{
    setName(event.target.value)
  }
  const cambioApellido=(event)=>{
    setApellido(event.target.value)
  }
  const cambioApodo=(event)=>{
    setApodo(event.target.value)
  }
  const enviar = (event) => {
    event.preventDefault();
    setFormEnv(true);
  }
  
  const [formularioEnv, setFormEnv] = useState(false);

  return (
    <main>
      <div className='container'>
    <div className ='App'>
    <div className='cuadrado'>
      <p>Nombre:</p>
      <input onChange={cambioNombre} value={nombre}/>
      </div>
      <br/>
      <div className='cuadrado'>
      <p>Apellido:</p>
      <input onChange={cambioApellido} value={apellido}/>
      </div>
      <br/>
      <div className='cuadrado'>
      <p>Apodo:</p>
      <input onChange={cambioApodo} value={apodo}/>
      </div>
      
      <br/>
      <br/>
      <br/>

      <div className='botones'>
      <button disabled = {!isDisableGlobal} onClick={enviar} >Enviar</button>
      <button onClick = {limpiar}>Limpiar</button>
      </div>
      <br/>
      <p>Información</p>
      {formularioEnv && (<p> {`${nombre}`} {`${apellido}`} {`${apodo}`}</p>)}
      
    </div>
    </div>
    </main>
  );
  
}


