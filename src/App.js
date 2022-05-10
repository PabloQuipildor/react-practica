import './App.css';
import freeCodecamplogo from "./imagenes/freecodecamp-logo.png"
import ListaDeTareas from "./componentes/ListaDeTarea";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={freeCodecamplogo}
          alt="logo de frecode"
          className="freecodecamp-logo"
        />
        </div>
        <div className="tareas-lista-principal">
          <h1>Mis Tareas</h1>
          <ListaDeTareas/>
        </div>
    </div>
  );
}

export default App;











