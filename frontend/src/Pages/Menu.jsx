import React from 'react';
import { Link } from 'react-router-dom'; // Asumiendo que estás utilizando React Router para la navegación

function Menu() {
  return (
    <div className="menu">
      <h1>Menú</h1>
      <ul>
        <li>
          <Link to="/Mestros">CRUD</Link>
        </li>
        <li>
          <Link to="/Gallery">Galería</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
