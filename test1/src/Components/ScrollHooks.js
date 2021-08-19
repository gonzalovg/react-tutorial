import { useEffect, useState } from "react";

const ScrollHooks = () => {
  const [scrollY, setScrollY] = useState(0);
  //fase de montaje
  useEffect(() => {
    console.log("Fase de montaje");
  }, []);
  //fase de actualizacion
  useEffect(() => {
    console.log("fase de actualizacion");

    const detectarScroll = () => setScrollY(window.pageYOffset);
    console.log(scrollY);
    window.addEventListener("scroll", detectarScroll);

    return () => {
      window.removeEventListener("scroll", detectarScroll);
    };
  }, [scrollY]);

  //fase de desmontaje
  useEffect(() => {
    return () => {
      console.log("FASE DE DESMONTAJE");
    };
  });

  return (
    <>
      <h2>ScrollHooks</h2>
      <p>{scrollY}</p>
    </>
  );
};

export default ScrollHooks;
