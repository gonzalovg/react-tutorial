import logo from "./logo.svg";
import "./App.css";
import Welcome from "./Components/Welcome";
import Estado from "./Components/Estado";
import RenderizadoElementos from "./Components/RenderizadoElementos";
import { Padre } from "./Components/ComunicacionComponentes";
import CicloVida from "./Components/CicloVida";
import AjaxApis from "./Components/AjaxApis";
import ContadorHooks from "./Components/ContadorHooks";
import Example from "./Components/test";
import RelojHooks from "./Components/RelojHooks";
import {
  EventosES6,
  EventosES7,
  MasSobreComponentes,
} from "./Components/Eventos";
import ScrollHooks from "./Components/ScrollHooks";

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
            <Welcome name="Gonzalo" content="esto es del curso de Jon Mircha" />
            <hr />
          </a>
          <Estado className="class-test" estado="padre" />
          <RenderizadoElementos />
          <EventosES6 />
          <hr />
          <EventosES7 />
          <hr />
          <MasSobreComponentes />
          <hr />
          <Padre />
          <hr />
          <CicloVida />
          <hr />
          <AjaxApis />
          <hr />
          <ContadorHooks />
          <ScrollHooks />
          <hr />
          <Example />
          <hr />
          <RelojHooks />
        </header>
      </section>
    </div>
  );
}

export default App;
