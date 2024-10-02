import React, { createContext, useState } from "react";
import Person1 from '../asset/imagenes/persona1.png'
import Person2 from '../asset/imagenes/persona2.png'
import Person3 from '../asset/imagenes/persona3.png'

const ComentariosContext = createContext();


function ComentariosProvider({children}) {

  const [comentarios, setComentarios] = useState([
    {id:1 , usuario:'Abigail Torres', comentario:'Este curso da pena no se apunten no tiene ni el front lever :)', imagen:Person1},
    {id:2 , usuario:'Esteban Quito', comentario:'Oigan devuelvanme mi dinero que compre sin querer no sean malos :(', imagen:Person2},
    {id:3 , usuario:'Jose Alberto', comentario:'Aguita Aguita aguita compren su aguita a solo promociono mi producto', imagen:Person3},
  ])

  return (
    <ComentariosContext.Provider value={{comentarios}}>
      {children}
    </ComentariosContext.Provider>
  )
}

export {ComentariosContext, ComentariosProvider}