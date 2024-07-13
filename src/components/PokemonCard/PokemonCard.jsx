import React, { useEffect, useState } from 'react';
import './PokemonCard.css';

function PokemonCard(props) {
  const { name, url } = props;
  const [pokemonsDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    async function getPokemonDetails() {
      const res = await fetch(`${url}`);
      const data = await res.json();
      setPokemonDetails(data);
      console.log(data);
    }
    getPokemonDetails();
  }, []);

  return (
    <>
      <div className='card-container'>
        <div className='img-container'>
          <img src={pokemonsDetails?.sprites?.front_default} alt='' />
        </div>
        <h4>{name[0].toUpperCase() + name.slice(1, name.length)}</h4>
      </div>
    </>
  );
}

export default PokemonCard;
