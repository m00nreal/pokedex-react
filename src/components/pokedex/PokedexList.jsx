import React from 'react';
import PokeCard from "./PokedexCard";
import {Spinner} from "reactstrap";

const PokedexList = ({ data, loading }) => {


    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        loading ?
                            <div className="col m-4 d-flex justify-content-center align-items-center">
                                <Spinner color="primary"/>
                            </div>
                            :
                            data.map(pokemon => (
                                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={pokemon.id}>
                                    <PokeCard
                                        key={pokemon.id}
                                        {...pokemon}
                                        loading={loading}
                                    />
                                </div>
                            ))
                    }
                </div>
            </div>
        </>
    );
};

export default PokedexList;
