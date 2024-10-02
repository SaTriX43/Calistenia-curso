import React, { useContext } from "react";
import '../styles/Home.css'
import { CursosContext } from "../contexts/Cursos";
import { SizeContext } from "../contexts/Sizes";
import { ComentariosContext } from "../contexts/Comentarios";
import { Carousel } from "react-bootstrap";


function Home() {

  const {comentarios} = useContext(ComentariosContext)
  const {cursos} = useContext(CursosContext)
  const {esMobile} = useContext(SizeContext)


  return(
    <main className="home__main">
      {/* sc 1 */}
      <section className="home__sc1">
        <div className="home__sc1-fondo"></div>
        <div className="home__sc1-box">
          <h1>Nuestros Cursos</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officia non dignissimos voluptatem, temporibus consequuntur similique atque repellat. Repellat adipisci nemo a ipsum quisquam consequatur ad fugiat corporis hic dolorum, ipsa omnis officia autem maiores aspernatur facere alias, sunt eaque sed temporibus, quia repudiandae! Quod, necessitatibus? Molestias.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum soluta nisi aliquam. Praesentium dolor cupiditate officiis amet perspiciatis aliquam a dolores architecto! Corrupti commodi placeat mollitia laborum. Sint quasi exercitationem illo veritatis repellat ratione ab fuga inventore ipsam doloremque! Atque ut consequatur placeat doloremque magni repudiandae fugiat facilis fugit voluptatem.</p>
          <div className="home__sc1-container-buttons">
            <button className="home__sc1-buttons">
              lorem
            </button>
            <button className="home__sc1-buttons">
              lorem
            </button>
            <button className="home__sc1-buttons">
              lorem
            </button>
          </div>
        </div>
      </section>

      {/* sc2  */}
      <section className="home__sc2">
        {cursos.map(habilidad => {
          return(
            <div className={`home__sc2-card`} key={habilidad.id}>
              <div className="home__sc2-card-container-img">
                <img src={habilidad.imagen} className="home__sc2-card-img" alt={`imagen de ${habilidad.titulo}`}/>
              </div>
              <h3 className="home__sc2-card-title">{habilidad.titulo}</h3>
              <p>Tiempo = <b>{habilidad.fecha}</b></p>
              <hr/>
              <p>{habilidad.descripcion}</p>
              <p>Precio = <b>{habilidad.precio}</b></p>
              <div className="home__sc2-card-container-buttons">
                <button className="home__sc2-card-buttons btn-comprar">Comprar</button>
                <button className="home__sc2-card-buttons btn-carrito">Carrito</button>
              </div>
            </div>
          )
        })}
      </section>

      {/* sc3  */}
      <section className="home__sc3">
      <Carousel>
          {comentarios.map((comentario) => (
            <Carousel.Item key={comentario.id}>
              <div className="home__sc3-card-slider">
                <div className="home__sc3-card-container-img">
                  <img
                    src={comentario.imagen}
                    className="home__sc3-card-img"
                    alt={`imagen de ${comentario.usuario}`}
                  />
                </div>
                <h3 className="home__sc3-card-title">{comentario.usuario}</h3>
                <p className="home__sc3-comentario">"{comentario.comentario}"</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    </main>
  )
}


export default Home