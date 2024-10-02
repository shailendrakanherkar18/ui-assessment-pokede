import { useParams } from 'react-router-dom';

import { PokemonDetailsDailog } from '../components/PokemonDetails';

export const PokemonDetailsPage = () => {
  const { id } = useParams();

  return <PokemonDetailsDailog id={id as string} />;
};
