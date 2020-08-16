import PokeCard from "../../../components/pokedex/PokedexCard";
import {mount, shallow} from "enzyme";
import React from "react";
import {CardImg, Spinner} from "reactstrap";

describe('Tests in <PokedexCard/>', function () {

    it('should match snapshot', function () {
        const init = {
            id: 1,
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            name: 'bulbasaur',
            abilities: ['overgrow, chlorophyll'],
            height: 70,
            weight: 69,
            types: ['grass', 'poison'],
            loading: false
        }

        const wrapper = shallow(<PokeCard {...init}/>);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render spinner if there is no info yet', function () {
        const init = {
            id: 0,
            image: '',
            name: '',
            abilities: [],
            height: 0,
            weight: 0,
            types: [],
            loading: true
        }

        const wrapper = shallow(<PokeCard {...init}/>);

        expect(wrapper.contains(<Spinner color="primary"/>)).toBe(true);
    })

    it('should set a default image if there is no image', function () {
        const init = {
            id: 1,
            image: '',
            name: 'bulbasaur',
            abilities: ['overgrow, chlorophyll'],
            height: 70,
            weight: 69,
            types: ['grass', 'poison'],
        }

        const wrapper = mount(<PokeCard {...init} loading={false}/>);
        expect(wrapper.contains(<CardImg className="align-self-center" width="50%" src="/pokedex-react/assets/images/noimg.png" alt={init.name}/>)).toBe(true);
    })

});