import React, { Component } from "react";

export default class Evento extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }
  sumar(e) {
    this.setState({
      contador: this.state.contador + 1,
    });
  }
  restar(e) {
    this.setState({
      contador: this.state.contador - 1,
    });
  }
  render() {
    return (
      <div>
        <h2>Eventos en React</h2>
        <div>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </div>
        <h2>{this.state.contador}</h2>
      </div>
    );
  }
}
