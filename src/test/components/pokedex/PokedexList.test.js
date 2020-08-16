import PokedexList from "../../../components/pokedex/PokedexList";
import {shallow} from "enzyme";
import React from "react";


describe('Tests in <PokedexList/>', function () {

    it('should match snapshot', function () {

        const data = [{
            id: 1,
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            name: 'bulbasaur',
            abilities: ['overgrow, chlorophyll'],
            height: 70,
            weight: 69,
            types: ['grass', 'poison'],
        }]

        const wrapper = shallow(<PokedexList data={data} loading={false}/>)
        expect(wrapper).toMatchSnapshot();
    });

});