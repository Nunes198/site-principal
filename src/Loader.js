import React from 'react';

function Loader() {
  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <img src="/imagens/capa.png" alt="Logo Eco Sagrado" className="loader-logo" />
        <div className="loader-text">Carregando...</div>
      </div>
    </div>
  );
}

export default Loader;
