import React, { useEffect, useState } from 'react';

//ract icons
import { CiSearch } from 'react-icons/ci';

//components
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import './home.css';

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [query, setQuery] = useState('');

  //   const [filteredPokemons, setFilteredPokemons] = useState([]);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.includes(query)
  );

  useEffect(() => {
    async function getData() {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await res.json();
      setPokemons(data.results);
    }
    getData();
  }, []);

  return (
    <>
      <div className='navbar'>
        <h3>POKEMON.</h3>
        <div className='search-bar'>
          <input
            id='search-input'
            type='text'
            placeholder='Search'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <CiSearch size={20} />
        </div>
      </div>
      <div className='hero'>
        <h3>Pokemon Data</h3>
        <p>
          Pokémon the Series (1997–2023) Ash Ketchum, a young boy from Pallet
          Town, comes of age and gains the right to be a Pokémon trainer.
        </p>
      </div>
      <div className='pokemon-cardlist'>
        <div className='grid-container'>
          {filteredPokemons.map((pokemon, idx) => (
            <div key={idx} className='grid-child'>
              <PokemonCard name={pokemon.name} url={pokemon.url} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
