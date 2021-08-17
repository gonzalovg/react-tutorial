import React, { useState } from "react";

const ContadorHooks = (props) => {
  const [contador, setContador] = useState(0);

  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);
  // this.set;

  return (
    <>
      <h1>HOOKS</h1>
      <h2>{contador}</h2>
      <div>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </div>
    </>
  );
};

export default ContadorHooks;
