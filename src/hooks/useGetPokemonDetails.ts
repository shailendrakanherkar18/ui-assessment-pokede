import { useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export type PokemonDetails = {
  id: string;
  number: string;
  name: string;
  weight: {
    minimum: string;
    maximum: string;
  };
  height: {
    minimum: string;
    maximum: string;
  };
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  fleeRate: 'number';
  maxCP: 'integer';
  maxHP: 'integer';
  image: string;
};

export const GET_POKEMON = gql`
  query pokemon($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`;

export const useGetPokemon = (id: string) => {
  const { data, ...queryRes } = useQuery(GET_POKEMON, {
    variables: {
      id,
    },
  });

  const pokemon: PokemonDetails = useMemo(() => data?.pokemon || [], [data]);

  return {
    pokemon,
    ...queryRes,
  };
};
