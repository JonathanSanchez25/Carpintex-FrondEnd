import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = ({ setListFilter }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const searchItems = async (query) => {
    try {
      const response = await fetch(
        `https://localhost:7241/api/Producto${query ? `/search?search=${encodeURIComponent(query)}` : ""}`
      );
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al buscar productos:", error);
      throw error;
    }
  };

  const handleSearch = async () => {
    try {
      // Realiza la búsqueda utilizando la función de la API
      const results = await searchItems(searchQuery);

      // Actualiza el estado de búsqueda en el componente Productos
      setListFilter(searchQuery);

      // Redirige a la página de resultados de búsqueda con los datos de la búsqueda
      navigate(`/productos?search=${encodeURIComponent(searchQuery)}`, {
        state: { results, query: searchQuery },
      });
    } catch (error) {
      console.error("Error al realizar la búsqueda:", error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="input-group mb-3 search-box-container">
      <input
        type="text"
        className="form-control search-input"
        placeholder="Buscar productos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="btn btn-primary" type="button" onClick={handleSearch}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBox;
