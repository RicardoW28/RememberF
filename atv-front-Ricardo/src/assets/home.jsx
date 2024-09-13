import React, { useState } from 'react';
import './Banner.css'; // Para adicionar estilos

function Banner() {
  const [anime, setAnime] = useState('');

  const handleInputChange = (event) => {
    setAnime(event.target.value);
  };

  const handleAddAnime = () => {
    console.log(`Anime anotado: ${anime}`);
    setAnime('');
  };

  return (
    <div className="banner">
      <h1>Lista de Animes Assistidos e por Assistir</h1>
      
      <div className="watched-animes">
        <h2>Animes que já assisti</h2>
        <ul>
          <li>Bleach - Iniciado em 19/07/2021, Finalizado em 24/10/2023</li>
          <li>Inuyasha - Iniciado em 02/02/2020, Finalizado em 03/08/2020</li>
          <li>Cowboy Bebop - Iniciado em 30/06/2023, Finalizado em 29/08/2023</li>
          <li>Death Note - Iniciado em 21/05/2021, Finalizado em 01/07/2021</li>
        </ul>
      </div>

      <div className="to-watch-animes">
        <h2>Animes que vou assistir</h2>
        <input 
          type="text" 
          value={anime} 
          onChange={handleInputChange} 
          placeholder="Nome do anime" 
        />
        <button onClick={handleAddAnime}>Anotado</button>
      </div>
    </div>
  );
}

export default Banner;