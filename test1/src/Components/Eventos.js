import React, { Component } from "react";

export class EventosES6 extends Component {
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
        <h2>Eventos en React ES6</h2>
        <div>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </div>
        <h2>{this.state.contador}</h2>
      </div>
    );
  }
}
//Properties Initialitzer
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };
  sumar = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };
  restar = (e) => {
    this.setState({
      contador: this.state.contador - 1,
    });
  };
  render() {
    return (
      <div>
        <h2>Eventos en React ES7</h2>
        <div>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </div>
        <h2>{this.state.contador}</h2>
      </div>
    );
  }
}
