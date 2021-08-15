import logo from "./logo.svg";
import "./App.css";
import Welcome from "./Components/Welcome";
import Estado from "./Components/Estado";
import RenderizadoElementos from "./Components/RenderizadoElementos";
import { Padre } from "./Components/ComunicacionComponentes";
import CicloVida from "./Components/CicloVida";
import AjaxApis from "./Components/AjaxApis";
import {
  EventosES6,
  EventosES7,
  MasSobreComponentes,
} from "./Components/Eventos";
function App() {
  return (
    <div className="App">
      <section>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Welcome
              name="Gonzalo"
              content="esto es del curso de Jon Mircha"
            ></Welcome>
            <hr />
          </a>
          <Estado className="class-test" estado="padre"></Estado>
          <RenderizadoElementos />
          <EventosES6></EventosES6>
          <hr />
          <EventosES7></EventosES7>
          <hr />
          <MasSobreComponentes></MasSobreComponentes>
          <hr />
          <Padre />
          <hr />
          <CicloVida></CicloVida>
          <hr />
          <AjaxApis></AjaxApis>
        </header>
      </section>
    </div>
  );
}

export default App;
