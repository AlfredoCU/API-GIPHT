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
