import React, { Component } from "react";

function EstadoAHijo(props) {
  return <h2>{props.contadorHijo}</h2>;
}

export default class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    setInterval(() => {
      this.setState({
        contador: this.state.contador + 1,
      });
    }, 1000);
  }

  render() {
    return (
      <>
        Estado {this.props.estado}
        <h1>{this.state.contador}</h1>
        <EstadoAHijo contadorHijo={this.state.contador} />
      </>
    );
  }
}
