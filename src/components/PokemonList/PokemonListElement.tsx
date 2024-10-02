import { createUseStyles } from 'react-jss';
import { Pokemon } from '../../hooks/useGetPokemons';

interface IProps {
  pokemonDetails: Pokemon;
  onPokemonListClickHandler: (p: Pokemon) => void;
}

export const PokemonListElement = (props: IProps) => {
  const { pokemonDetails, onPokemonListClickHandler } = props;
  const classes = useStyles();

  return (
    <div
      className={classes.card}
      onClick={() => onPokemonListClickHandler(pokemonDetails)}
    >
      <img
        className={classes.resoponsiveImage}
        src={pokemonDetails.image}
        alt={pokemonDetails.name}
      />
      <div className={classes.cardBody}>
        <h4 className={`${classes.fBlack} ${classes.cardTitle}`}>
          {pokemonDetails.name}
        </h4>
        <span className={`${classes.fBlack} ${classes.cardText}`}>
          Number :{' '}
          <span className={`${classes.fBlack} ${classes.fw400}`}>
            {pokemonDetails.number}
          </span>
        </span>
        <span className={`${classes.fBlack} ${classes.cardText}`}>
          Types:{' '}
          <span className={`${classes.fBlack} ${classes.fw400}`}>
            {pokemonDetails.types.join(', ')}
          </span>
        </span>
      </div>
    </div>
  );
};

const useStyles = createUseStyles(
  {
    card: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '0.25rem',
      width: '212px',
      border: '1px solid rgb(0 0 0 / 13%)',
      cursor: 'pointer',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
        zIndex: '1',
        outline: '0',
      },
    },
    cardBody: {
      display: 'flex',
      flexDirection: 'column',
      padding: '1rem',
      background: '#fff',
      borderBottomRightRadius: '0.25rem',
      borderBottomLeftRadius: '0.25rem',
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: '550',
      marginBottom: '0.75rem',
    },
    cardText: {
      fontSize: '1rem',
      fontWeight: '400',
      marginBottom: '0.75rem',
    },
    fw400: {
      fontWeight: '500',
    },
    fBlack: {
      color: '#000',
    },
    w200: {
      width: '212px',
    },
    resoponsiveImage: {
      width: '100%',
      height: '200px',
      maxWidth: '212px',
      borderTopRightRadius: '0.25rem',
      borderTopLeftRadius: '0.25rem',
    },
  },
  { name: 'PokemonListElement' }
);
