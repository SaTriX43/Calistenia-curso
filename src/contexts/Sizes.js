import { createContext, useEffect, useState } from "react";

const SizeContext = createContext();

function SizeProvider({children}) {

  const [esMobile, setEsMobile] = useState(window.innerWidth <= 750)

  useEffect(() =>{
    function handleResize() {
      setEsMobile(window.innerWidth <= 750)
    }

    window.addEventListener("resize",handleResize)

    return () => window.removeEventListener("resize",handleResize)
  },[])


  return (
    <SizeContext.Provider value={{esMobile}}>
      {children}
    </SizeContext.Provider>
  )
   
}


export {SizeContext, SizeProvider}