import { useState, useEffect, useRef } from 'react';
import {getPokemonAbilities, getPokemonTypes} from "../helpers/utils";


export const useFetchSingle = (url ) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect( () => {
        return () => {
            isMounted.current = false;
        }
    }, [])


    useEffect( () => {

        setState({ data: null, loading: true, error: null });

        fetch( url )
            .then( resp => resp.json())
            .then( data => {
                const abilities = getPokemonAbilities(data);
                const types = getPokemonTypes(data);
                const newPok = {
                    id: data.id,
                    image: data?.sprites?.front_default,
                    name: data.name,
                    abilities: abilities,
                    height: data.height,
                    weight: data.weight,
                    types: types
                }

                if ( isMounted.current ) {
                    setState({
                        loading: false,
                        error: null,
                        data: newPok
                    });
                }

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