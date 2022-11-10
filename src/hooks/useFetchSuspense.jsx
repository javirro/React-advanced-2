import useFetch from 'fetch-suspense'

export const useFetchPokemon = (name) => useFetch('https://pokeapi.co/api/v2/pokemon/'+ name)
