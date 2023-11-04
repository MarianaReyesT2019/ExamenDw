import React from 'react';

const TablaSencilla = () => {
  return (
    <div>
      <table className="w3-table w3-bordered">
        <thead>
          <tr>
            <th>Encabezado 1</th>
            <th>Encabezado 2</th>
            {/* Agrega más encabezados según tus necesidades */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dato 1</td>
            <td>Dato 2</td>
            {/* Agrega más datos según tus necesidades */}
          </tr>
          {/* Agrega más filas de datos según tus necesidades */}
        </tbody>
      </table>
    </div>
  );
};

export default TablaSencilla;
