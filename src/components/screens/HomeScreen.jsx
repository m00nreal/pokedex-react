import React, {useEffect, useState} from 'react';
import PokedexList from "../pokedex/PokedexList";
import {useFetch} from "../../hooks/useFetch";
import ReactPaginate from 'react-paginate';

const HomeScreen = () => {

    // Initial state
    const [state, setState] = useState({
        currentPage: 0,
        offset: 0,
        perPage: 24
    });

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
            <div className="d-none d-md-flex justify-content-center paginate">
                <ReactPaginate
                    previousLabel="<"
                    nextLabel=">"
                    breakLabel="..."
                    pageCount={41}
                    marginPagesDisplayed={7}
                    pageRangeDisplayed={7}
                    onPageChange={handlePageClick}
                    containerClassName="pagination"
                    pageClassName={'pagination-list-item'}
                    pageLinkClassName={'link'}
                    activeClassName={'active-link'}
                    activeLinkClassName={'active-link'}
                />
            </div>
            {/*hidden on larger screens. on smaller devices it has a lower pagination range*/}
            <div className="d-md-none d-block paginate">
                <ReactPaginate
                    previousLabel="<"
                    nextLabel=">"
                    breakLabel="..."
                    pageCount={41}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={2}
                    onPageChange={handlePageClick}
                    ontainerClassName="pagination"
                    pageClassName={'pagination-list-item'}
                    pageLinkClassName={'link'}
                    activeClassName={'active-link'}
                    activeLinkClassName={'active-link'}
                />
            </div>
        </div>
    );
};

export default HomeScreen;
