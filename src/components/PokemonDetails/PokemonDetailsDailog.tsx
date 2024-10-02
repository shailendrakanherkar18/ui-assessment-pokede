import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

import { LabelValue } from '../Shared';

import { useGetPokemon } from '../../hooks/useGetPokemonDetails';
import { ROUTE_CONSTANT } from '../../shared/constants';

interface IProps {
  id: string;
}

export const PokemonDetailsDailog = (props: IProps) => {
  const { id } = props;
  const [isModalOpen, setModalVisibility] = useState<boolean>(true);

  const { pokemon: pokemonDetails, loading } = useGetPokemon(id);

  const classes = useStyles();
  const navigate = useNavigate();

  const handleClose = () => {
    setModalVisibility(false);
    navigate(ROUTE_CONSTANT.POKEMON_LISTING);
  };

  return (
    <Dialog fullWidth maxWidth="lg" open={isModalOpen} onClose={handleClose}>
      <DialogTitle color="#000">Pokemon Details</DialogTitle>
      {loading && (
        <DialogContent>
          <div className={classes.skeletonWrapper}>
            <Skeleton variant="rectangular" width={212} height={200} />
          </div>
          <div className={`${classes.skeletonWrapper} ${classes.mt16}`}>
            <Skeleton variant="rectangular" width={140} height={30} />
          </div>
          <div className={classes.details}>
            {[...Array(12)].map((_, index) => (
              <Skeleton variant="rectangular" width={136} height={60} />
            ))}
          </div>
        </DialogContent>
      )}
      {!loading && (
        <DialogContent>
          <div className={classes.textCenter}>
            <img
              className={classes.resoponsiveImage}
              src={pokemonDetails.image}
              alt={pokemonDetails.name}
            />
            <Typography
              color="#000"
              variant="h4"
              component="h4"
              sx={{ fontWeight: 'bold', marginTop: '1rem' }}
            >
              {pokemonDetails.name}
            </Typography>
          </div>
          <div className={classes.details}>
            <LabelValue label="Number" value={pokemonDetails.number} />
            <LabelValue
              label="Minimum Weight"
              value={pokemonDetails.weight.minimum}
            />
            <LabelValue
              label="Maximum Weight"
              value={pokemonDetails.weight.maximum}
            />
            <LabelValue
              label="Minimum Height"
              value={pokemonDetails.height.minimum}
            />
            <LabelValue
              label="Maximum Height"
              value={pokemonDetails.height.maximum}
            />

            <LabelValue label="FleeRate" value={pokemonDetails.fleeRate} />
            <LabelValue label="MaxCP" value={pokemonDetails.maxCP} />
            <LabelValue label="MaxHP" value={pokemonDetails.maxHP} />
            <LabelValue
              label="Classification"
              value={pokemonDetails.classification}
            />
            <LabelValue label="Types" value={pokemonDetails.types.join(', ')} />
            <LabelValue
              label="Resistant"
              value={pokemonDetails.resistant.join(', ')}
            />
            <LabelValue
              label="Weaknesses"
              value={pokemonDetails.weaknesses.join(', ')}
            />
          </div>
        </DialogContent>
      )}
      <DialogActions style={{ justifyContent: 'center' }}>
        <Button variant="contained" color="primary" onClick={handleClose}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      height: '100%',
    },
    textCenter: {
      textAlign: 'center',
    },
    resoponsiveImage: {
      width: '100%',
      height: '200px',
      maxWidth: '212px',
      borderTopRightRadius: '0.25rem',
      borderTopLeftRadius: '0.25rem',
    },
    details: {
      display: 'flex',
      marginTop: '1rem',
      gap: '2rem',
      flexWrap: 'wrap',
    },
    mt16: {
      marginTop: '1rem',
    },
    skeletonWrapper: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  { name: 'PokemonDetailsDailog' }
);
