//1.IMPORT 
import './App.css';
import React, { useState } from 'react';

function App() {

  //---------------------2.HOOKS-----------------------//
  // A. NUEVO COMENTARIO DEL FORMULARIO
  const [comment, setComment] = useState({
    title: "",
    description: ""
  })
  // B. LISTADO DE TODOS LOS COMENTARIO DEL FORMULARIO
  const [listComment, setListComment] = useState([])
  

  //-----------------3 FUNCIONES DEL COMPONENTE-------------------//
  const mensajeBoton = (hola) =>{
    console.log("Hola Mundo")
    hola = "Hola mundo"
    return hola
  }

  //3.1 Captura de Datos
  const capturaDatos = (e) =>{
    console.log(e) // {..target: input value: "Rodrigo"}
    console.log(e.target.value) // Rodrigo - value es el valor del campo del Texto

    return setComment({
      ...comment,
      [e.target.name]: e.target.value,
    })
  }

  //3.2 CRUD - Crear y leer
  const retornarComment = (e) =>{
    e.preventDefault()
    
    //Empuja los datos puestos en el imput al arreglo
    setListComment([
      ...listComment,
      comment
    ])
    //Deja vacio los imputs para poder llenar de nuevo
    setComment({
      title: "",
      description: ""
    })

  }


  //----------------4 RETORNO DEL COMPONENTE------------------//
  return (
    <>
     
      <button onClick={()=>{ mensajeBoton() }}>Hola</button>
      
      <hr/>

      <h1>Crear Comment:</h1>
        <form onSubmit={(event)=> { retornarComment(event) }}>
          <h2>Escribe Title:</h2>
            <input 
              name="title"
              value={comment.title}
              onChange={(event) => { capturaDatos(event) }}
            />
          <h2>Escribe Description:</h2>
            <input 
              name="description"
              value={comment.description}
              onChange={(event) => { capturaDatos(event) }}
            />
          <br/>
          <button>Crear Publicacion</button>
        </form>

        <hr/>

        {
          
        listComment.map((elem) =>{
          return(
            <>
              <h4>{elem.title}</h4>
              <p>{elem.description}</p>
            </>
          )
        })
      }

    </>
  );
}

export default App;
