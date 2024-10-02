import { createContext, useState } from "react";
import FrontLever from '../asset/imagenes/front-lever.png'
import FullPlanche from '../asset/imagenes/full-planche.png'
import BackLever from '../asset/imagenes/back-level.png'
import MuscleUp from '../asset/imagenes/Muscle-Up.png'
import Handstand from '../asset/imagenes/handstand.png'
import Efesto from '../asset/imagenes/efesto.png'

const CursosContext = createContext();

function CursosProvider({children}) {

  const [cursos,setCursos] = useState([
    {id:1 ,imagen:FrontLever ,titulo:'Front Lever',descripcion:'Si no lo sacas con este curso depende de el esfuerzo o si no cambie de deporte xd', fecha:'4 meses | 1 anio', precio:'20,00$'},

    {id:2 ,imagen:FullPlanche ,titulo:'Full Planche',descripcion:'Flota en el aire solo con tus manos y en cualquier parte saca la plancha', fecha:'1 anio | 3 anio', precio:'40,00$'},

    {id:3 ,imagen:Handstand ,titulo:'Handstand',descripcion:'Joder que elegancia estar boca abajo deberias de intentarlo', fecha:'6 meses | 1,5 anio', precio:'10,00$'},

    {id:4 ,imagen:BackLever ,titulo:'Back Lever',descripcion:'mejora su movilidad de hombros e impresiona a tuis compas con un back lever', fecha:'3 meses | 1 anio', precio:'15,00$'},

    {id:5 ,imagen:MuscleUp ,titulo:'Muscle Up',descripcion:'Mira a todos por encima de la barra haciendo un mucle up con forma perfecta si no pues estaras abajo', fecha:'2 meses | 1 anio', precio:'20,00$'},

    {id:6 ,imagen:Efesto ,titulo:'Efesto',descripcion:'ya otro level no pues sigue este curso y mejoraras tus habilidades con efesto', fecha:'1 anio | 3 anio', precio:'60,00$'}
  ])

  return (
    <CursosContext.Provider value={{cursos}}>
      {children}
    </CursosContext.Provider>
  )
}


export {CursosContext, CursosProvider}