import React from "react";
import PropTypes from "prop-types";

const GifGridItem = ({ title, url }) => (
  <div className="gif-grid__card animate__animated animate__fadeIn">
    <img alt={title} src={url} />
    <p>{title || "it has no name"}</p>
  </div>
);

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifGridItem;

// TODO: Esto es con una desestructuración del obj.
// Se le envia un img={img}
// const GifGridItem = ({ img }) => (
//   <div className="gif-grid__card">
//     <img alt={img.title} src={img.url} />
//     <p>{img.title || "it has no name"}</p>
//   </div>
// );

// TODO: Esto es con un argumento props.
// Se le envia un img={img}
// const GifGridItem = (props) => (
//   <div className="gif-grid__card">
//     <img alt={props.img.title} src={props.img.url} />
//     <p>{props.img.title || "it has no name"}</p>
//   </div>
// );
