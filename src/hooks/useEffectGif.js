import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useEffectGif = (category) => {
  const [state, setState] = useState({ data: [], loading: true });

  //* Es equivalente a un ComponentDidMount.
  useEffect(() => {
    getGifs(category).then((gifs) => setState({ data: gifs, loading: false }));
  }, [category]);

  return state;
};

// Cuando se llama a una función async, esta devuelve un elemento Promise.
//* Cuando la función async devuelve un valor, Promise se resolverá con el valor devuelto.
// Si la función async genera una excepción o algún valor, Promise se rechazará con el valor generado.

// TODO: El useEffect anterior, el simplificado sólo funciona si hay un argumento.
// useEffect(() => {
//  // Retorna una promesa.
//  getGifs(category).then(setImages); // es igual a esto (gifs) => setImages(gifs)
// }, [category]); // Si hay cambios en el state, se ejecuta otra vez.
