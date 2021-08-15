import React, { Component } from "react";

export class Padre extends Component {
  state = {
    contador: 0,
  };

  incrementarContador = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };
  render() {
    return (
      <>
        <h2>Comunicación entre componentes</h2>
        <Hijo
          incrementar={(e) => this.incrementarContador(e)}
          mensaje="Mensaje 1"
        ></Hijo>

        <h1>{this.state.contador}</h1>
      </>
    );
  }
}

function Hijo(props) {
  return (
    <>
      <h3>{props.mensaje}</h3>
      <button onClick={props.incrementar}>Incrementar</button>
    </>
  );
}
