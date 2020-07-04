import React from "react";
import GifGridItem from "../components/GifGridItem";
import PropTypes from "prop-types";
import { useEffectGif } from "../hooks/useEffectGif";

const GifGrid = ({ category }) => {
  //* Renombramos la propiedad data a images.
  const { data: images, loading } = useEffectGif(category);

  return (
    <>
      {loading ? (
        <h1 className="category">Cargando...</h1>
      ) : (
        <>
          <h1 className="category">{category}</h1>
          <div className="gif-grid">
            {images &&
              images.map((img) => <GifGridItem key={img.id} {...img} />)}
          </div>
        </>
      )}
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
