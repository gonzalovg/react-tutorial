const cuadradoPromise = (value) => {
  if (typeof value !== "number") {
    return Promise.reject(`Error, el valor ${value} no es un número`);
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | 1000);
  });
};

const asignar = async () => {
  let space = document.querySelector("#space");
  try {
    console.log("Incio async");
    let obj = await cuadradoPromise(123);
    space.innerHTML = `${obj.value}, ${obj.result}`;
  } catch (e) {
    console.error(e);
  }
};
