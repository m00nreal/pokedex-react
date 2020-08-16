import React, {useEffect, useState} from 'react';
import PokedexList from "../pokedex/PokedexList";
import {useFetch} from "../../hooks/useFetch";
import ReactPaginate from 'react-paginate';

const HomeScreen = () => {

    // Initial state
    const [state, setState] = useState({
        pokemons: [],
        currentPage: 0,
        offset: 0,
        perPage: 24
    });

    // Get all pokemon names and api link at the begin of execution
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
            .then(resp => resp.json())
            .then(pokes => setState(prev => ({...prev, pokemons: pokes.results})))
            .catch(err => new Error('error getting info'))
    }, []);

    // Get pokemons
    const { data, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon?offset=${state.offset}&limit=${state.perPage}`);

    const orderedData = !loading && data.sort((a, b) => {
        return a.id - b.id;
    })

    // Pagination
    const handlePageClick = ( newPage ) => {
        const newOffset = state.perPage * newPage.selected;
        setState({
            ...state,
            offset: newOffset,
            currentPage: newPage.selected
        })
    };

    return (
        <div className="container">
            <h1 className="title text-center text-primary mt-4">All PoKeMoN</h1>
            <hr/>
            <PokedexList data={orderedData} loading={loading}/>
            <div className="d-none d-md-flex justify-content-center">
                <ReactPaginate
                    previousLabel="<"
                    nextLabel=">"
                    breakLabel="..."
                    pageCount={41}
                    marginPagesDisplayed={9}
                    pageRangeDisplayed={9}
                    onPageChange={handlePageClick}
                    containerClassName="pagination"
                    pageClassName={'pagination-list-item'}
                    pageLinkClassName={'link'}
                    activeClassName={'active-link'}
                    activeLinkClassName={'active-link'}
                />
            </div>
            {/*hidden on larger screens. on smaller devices it has a lower pagination range*/}
            <div className="d-md-none d-flex justify-content-center">
                <ReactPaginate
                    previousLabel="<"
                    nextLabel=">"
                    breakLabel="..."
                    pageCount={41}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={2}
                    onPageChange={handlePageClick}
                    containerClassName="pagination"
                    subContainerClassName="dark"
                    activeClassName="active-page"
                />
            </div>
        </div>
    );
};

export default HomeScreen;
