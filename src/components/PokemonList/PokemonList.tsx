import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useNavigate } from 'react-router-dom';

import { PokemonListElement } from './PokemonListElement';
import Skeleton from '@mui/material/Skeleton';

import { Pokemon, useGetPokemons } from '../../hooks/useGetPokemons';

import { ROUTE_CONSTANT } from '../../shared/constants';

export const PokemonList = () => {
  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();
  const navigate = useNavigate();

  const [searchString, setSearchString] = useState<string>('');

  const onSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  const filteredData = pokemons.filter((item) =>
    item.name.toLowerCase().includes(searchString.toLowerCase())
  );

  const onPokemnonCardClick = (pokemon: Pokemon) => {
    navigate(`${ROUTE_CONSTANT.POKEMON_LISTING}/${pokemon.id}`);
  };

  return (
    <>
      {!loading && (
        <div className={classes.searchBoxWrapper}>
          <input
            value={searchString}
            placeholder="Search for pokemon"
            className={classes.searchTextBox}
            onChange={onSearchTextChange}
          />
        </div>
      )}

      <div className={classes.root}>
        {loading && (
          <>
            {[...Array(12)].map((_, index) => (
              <Skeleton
                sx={{ bgcolor: 'grey.100' }}
                variant="rectangular"
                width={214}
                height={360}
              />
            ))}
          </>
        )}

        {filteredData.length === 0 && searchString !== '' && (
          <div className={classes.textCenter}>No records found</div>
        )}

        {filteredData.map((pkmn) => (
          <PokemonListElement
            key={pkmn.id}
            pokemonDetails={pkmn}
            onPokemonListClickHandler={onPokemnonCardClick}
          />
        ))}
      </div>
    </>
  );
};

const useStyles = createUseStyles(
  {
    searchBoxWrapper: {
      position: 'fixed',
      textAlign: 'center',
      marginBottom: '1rem',
      marginTop: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: '2',
    },
    searchTextBox: {
      padding: '10px 15px',
      fontSize: '1.2rem',
      borderRadius: '5px',
      border: '2px solid #161e2b',
      outline: 'none',
      width: '100%',
      maxWidth: '400px',
      color: '#333',
    },
    root: {
      paddingTop: '5rem',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '2.2rem',
      paddingLeft: '2.2rem',
    },
    textCenter: {
      textAlign: 'center',
      width: '100%',
      fontSize: '1rem',
    },
  },
  { name: 'PokemonList' }
);
