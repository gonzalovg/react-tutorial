import React, { Component } from "react";
import data from "../helpers/data.json";

function ListItem(props) {
  return (
    <li>
      <a href={props.el.web}>{props.el.name}</a>
    </li>
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seasons: ["Primavera", "Verano", "Otoño", "Invierno"],
    };
  }

  render() {
    return (
      <ul>
        {data.frameworks.map((el) => (
          <ListItem key={el.id} el={el} />
        ))}
      </ul>
    );
  }
}
