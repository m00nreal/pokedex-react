import React, {useEffect, useState} from 'react';
import {useForm} from "../../hooks/useForm";
import PokeCard from "../pokedex/PokedexCard";
import {useFetchSingle} from "../../hooks/useFetchSingle";
import {Alert, Spinner} from "reactstrap";

const SearchScreen = () => {

    // App state
    const [state, setState] = useState({
        pokemonsNames: JSON.parse(localStorage.getItem('pokenames')) || [],
        pokemon: ''
    });

    // Get all pokemon names and api link at the begin of execution
    useEffect(() => {
        if(!localStorage.getItem('pokenames')){
            fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
                .then(resp => resp.json())
                .then(pokes => {
                    const names = pokes.results.map(p => p.name);
                    localStorage.setItem('pokenames', JSON.stringify(names))
                    setState(prev => ({pokemonsNames: names, pokemons: pokes.results}))
                })
                .catch(err => new Error('error getting info'))
        }
    }, []);

    // Search handling
    const { data, loading } = useFetchSingle(`https://pokeapi.co/api/v2/pokemon/${state.pokemon}`);

    const [ formValues, handleInputChange, reset ] = useForm({pokemon: ''});

    const { pokemon } = formValues;

    const validateName = str => {
        return str.trim().toLowerCase();
    }

    const handleSearch = (e) => {
        e.preventDefault();
        const sanitize = validateName(pokemon)
        if( /([A-Za-z- .])+/.test(sanitize) ) {
            if( state.pokemonsNames.includes(sanitize)){
                setState(prev => ({...prev, pokemon: sanitize}))
                reset();
            } else {
                setState(prev => ({
                    ...prev,
                    pokemon: sanitize
                }))
            }
        }
    }

    return (
        <div className="container mt-4">
            <div className="row d-flex align-content-center justify-content-center align-items-center flex-column">
                <div className="col-6 d-flex flex-column">
                    <h1 className="title text-primary text-center" >Search by name</h1>
                    <hr/>
                    <form onSubmit={handleSearch} className="align-self-center">
                        <input
                            autoComplete="off"
                            className="form-control"
                            id="pokemon"
                            name="pokemon"
                            onChange={handleInputChange}
                            placeholder="Totodile..."
                            type="text"
                            value={pokemon}
                        />
                    </form>
                </div>
                <div className="m-4 d-flex justify-content-center align-items-center">
                    {
                        state.pokemon === '' && !loading && <Alert className="mx-4">Type a name to search a pokemon</Alert>
                    }
                    {
                        state.pokemonsNames.includes(validateName(state.pokemon)) && loading && !data && <Spinner className="m-auto" color="primary"/>
                    }
                    {
                        !state.pokemonsNames.includes(validateName(state.pokemon)) && state.pokemon !== '' && !data && <Alert color="danger">Pokemon { state.pokemon } does not exists</Alert>
                    }
                    {
                        state.pokemon !== '' && data && <PokeCard className="mb-4" {...data} loading={loading}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default SearchScreen;
