import './App.css';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import { ComentariosProvider } from './contexts/Comentarios';
import { CursosProvider } from './contexts/Cursos';
import { SizeProvider } from './contexts/Sizes';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
    <SizeProvider>
      <Header/>
      <CursosProvider>
      <ComentariosProvider>
        <Home/>
      </ComentariosProvider>
      </CursosProvider>
      <Footer/>
    </SizeProvider>  
    </div>
  );
}

export default App;
