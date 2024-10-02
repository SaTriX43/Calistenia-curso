import React, { useContext, useState } from "react";
import '../styles/Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { SizeContext } from "../contexts/Sizes";

function Header() {

  const {esMobile} = useContext(SizeContext)

  const [menuActivo, setMenuActivo] = useState(false);

  function handleMenuActivo() {
    setMenuActivo(!menuActivo)
  }

  return (
    <header className='header'>
      <h3>SaTriXCourse</h3>
      {esMobile && (
        <FontAwesomeIcon
          icon={faBars}
          className='bars'
          onClick={handleMenuActivo}
        />
      )}
      
      {/* nav Mobile */}
      {esMobile ? (
        <article className={`header__desplegable ${menuActivo ? 'header__desplegable-activo' : ''}`}>
          <nav className="header__nav">
            <li><a className="header__nav-items" href="#">Inicio</a></li>
            <li><a className="header__nav-items" href="#">Cursos</a></li>
            <li><a className="header__nav-items" href="#">Contacto</a></li>
          </nav>
          <div className="header__container-buttons">
            <div className="container-car">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="header__icons"
              />
            </div>
            <button className="header__button-right">
              Crear una cuenta
            </button>
          </div>
        </article>
      ):(
        <>
          <nav className="header__nav">
            <li><a className="header__nav-items" href="#">Inicio</a></li>
            <li><a className="header__nav-items" href="#">Cursos</a></li>
            <li><a className="header__nav-items" href="#">Contacto</a></li>
          </nav>
          <div className="header__container-buttons">
            <div className="container-car">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="header__icons"
              />
            </div>
            <button className="header__button-right">
              Crear una cuenta
            </button>
          </div>
        </>
      )}
      
      
    </header>
  )
}

export default Header