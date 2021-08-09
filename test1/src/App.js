import logo from "./logo.svg";
import "./App.css";
import Welcome from "./Components/Welcome";
import Estado from "./Components/Estado";
import RenderizadoElementos from "./Components/RenderizadoElementos";
import Evento from "./Components/Eventos";
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
          <Evento></Evento>
        </header>
      </section>
    </div>
  );
}

export default App;
