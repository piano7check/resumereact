import React from 'react';
import './styles.css'; // Importamos el archivo de estilos

const Presentation = () => {
  return (
    <div className="cv-container">
      <img className="cv-image" src={process.env.PUBLIC_URL + "/image.jpg"} alt="Foto de Gustavo Rojas Valdivia"/>
      <h1>Gustavo Rojas Valdivia</h1>
      <p>Email: <a href="mailto:gustavo@email.com">gustavo@email.com</a></p>
    </div>
  );
}

export default Presentation;
