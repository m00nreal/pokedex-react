import React, {useState} from 'react';
import {useForm} from "../../hooks/useForm";
import PokeCard from "../pokedex/PokedexCard";
import {useFetchSingle} from "../../hooks/useFetchSingle";
import {Alert, Spinner} from "reactstrap";

const SearchScreen = () => {

    // App state
    const [state, setState] = useState('');

    // Search handling
    const { data, loading } = useFetchSingle(`https://pokeapi.co/api/v2/pokemon/${state}`);

    const [ formValues, handleInputChange, reset ] = useForm({pokemon: ''});

    const { pokemon } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
        const sanitize = pokemon.toLowerCase().trim();
        if( /([A-Za-z- .])+/.test(sanitize) ) {
            setState(sanitize);
            reset();
        }
    }

    return (
        <div className="container mt-4">
            <div className="row d-flex align-content-center justify-content-center align-items-center flex-column">
                <div className="col-6 d-flex flex-column">
                    <h1 className="title text-primary text-center" >Buscar por nombre</h1>
                    <hr/>
                    <form onSubmit={handleSearch} className="align-self-center">
                        <input
                            autoComplete="off"
                            className="form-control"
                            id="pokemon"
                            name="pokemon"
                            onChange={handleInputChange}
                            placeholder="pokemon..."
                            type="text"
                            value={pokemon}
                        />
                    </form>
                </div>
                <div className="m-4 d-flex justify-content-center align-items-center">
                    {
                        state === '' && !loading && <Alert className="mx-4">Ingresa un nombre para comenzar a buscar un pokemon</Alert>
                    }
                    {
                        loading && !data && <Spinner className="m-auto" color="primary"/>
                    }
                    {
                        state !== '' && !loading && !data && <Alert color="danger">El pokemon { state } no existe</Alert>
                    }
                    {
                        state !== '' && data && <PokeCard className="mb-4" {...data} loading={loading}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default SearchScreen;
