import React from "react";

const NoResultsFound = () => (
  <div className="d-flex flex-column flex-md-row justify-content-center py-3 py-md-5">
    <img
      src="https://www.launchpads.com.au/assets/css/icons/animated/search/animat-search-color.gif"
      alt="gif"
      width="150"
      height="150"
      className="mx-auto mx-md-0"
    />
    <div className="ml-3">
      <span className="h4">
        No hay publicaciones que coincidan con tu búsqueda.
      </span>
      <ul className="mt-3">
        <li>
          <b>Revisá la ortografía</b> de la palabra
        </li>
        <li>
          Utilizá <b>palabras más genéricas</b> o menos palabras.
        </li>
        <li>Navegá por las categorías para encontrar un producto similar</li>
      </ul>
    </div>
  </div>
);

export default NoResultsFound;
