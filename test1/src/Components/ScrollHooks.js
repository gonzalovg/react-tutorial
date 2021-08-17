import { useEffect, useState } from "react";

const ScrollHooks = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log("fase de actualizacion");

    const detectarScroll = () => setScrollY(window.pageYOffset);
    console.log(scrollY);
    window.addEventListener("scroll", detectarScroll);
  });

  useEffect(() => {
    console.log("Fase de montaje");
  }, []);

  return (
    <>
      <h2>ScrollHooks</h2>
      <p>{scrollY}</p>
    </>
  );
};

export default ScrollHooks;
