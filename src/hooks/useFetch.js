import { useState, useEffect, useRef } from 'react';
import {getPokemonAbilities, getPokemonTypes} from "../helpers/utils";


export const useFetch = ( url ) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect( () => {
        return () => {
            isMounted.current = false;
        }
    }, [])


    useEffect( () => {

        setState({ data: [], loading: true, error: null });

        fetch( url )
            .then( resp => resp.json() )
            .then( pokemons => {
                const { results } = pokemons;
                results.forEach(pokemon => {
                    fetch(pokemon.url)
                        .then( resp => resp.json())
                        .then( pokemon => {
                            const abilities = getPokemonAbilities(pokemon);
                            const types = getPokemonTypes(pokemon);
                            const newPokemon = {
                                    id: pokemon.id,
                                    image: pokemon?.sprites?.front_default,
                                    name: pokemon.name,
                                    abilities: abilities,
                                    height: pokemon.height,
                                    weight: pokemon.weight,
                                    types: types
                            }
                            if ( isMounted.current ) {
                                setState(prev => ({
                                    loading: false,
                                    error: null,
                                    data: [...prev.data, newPokemon]
                                }));
                            }
                        })
                })
            })
            .catch( () => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                })
            })

    },[url])

    return state;
}