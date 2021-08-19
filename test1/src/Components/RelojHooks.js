import React, { useState, useEffect } from "react";
import Example from "./test";

const Relos = ({ hora }) => {
  return <h1>{hora}</h1>;
};

const RelojHooks = () => {
  const [date, setDate] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  const toogle = () => {
    setVisible(!visible);
    setDate(new Date().toLocaleTimeString());
  };

  const ticTac = () => {};

  useEffect(() => {});

  return (
    <>
      <h1>{visible ? <Relos hora={date} /> : "Pulsa toogle"}</h1>
      <button onClick={toogle}>TOGGLE</button>
    </>
  );
};

export default RelojHooks;
