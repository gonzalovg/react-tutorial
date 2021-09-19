import React, { useState, useEffect } from "react";

const Reloj = ({ hora }) => {
  return <h1>{hora}</h1>;
};

const RelojHooks = () => {
  const [date, setDate] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    let temporizador;
    if(visible){
      temporizador= setInterval(()=>{
        setDate(new Date().toLocaleTimeString());
      },1000);
    }else {
      clearInterval(temporizador);
    }
     return ()=>{
        console.log("Fase de desmontaje");
        clearInterval(temporizador);
      }
  },[visible])


  useEffect(() => {});

  return (
    <>
      {visible && <Reloj hora={date} />} 
      <button onClick={()=>setVisible(true)}>Iniciar</button>
      <button onClick={()=>setVisible(false)}>Detener</button>
    </>
  );
};

export default RelojHooks;
