import React, { useState } from "react";
import PropTypes from "prop-types";

const FormCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleImputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    // Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.
    e.preventDefault();

    // El método trim() elimina los espacios en blanco en ambos extremos del string.
    if (inputValue.trim().length > 2) {
      //* El primer argumento es el valor del estado anterior y luego tiene que regresar el nuevo Estado.
      setCategories((cat) => [inputValue, ...cat]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-category">
      <input
        type="text"
        placeholder="Buscar GIFS de..."
        value={inputValue}
        onChange={handleImputChange}
        className="form-category__imput"
      />
    </form>
  );
};

FormCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default FormCategory;
