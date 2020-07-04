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
