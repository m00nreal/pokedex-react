import PokeNavbar from "../../../components/ui/PokeNavbar";
import React from "react";
import { shallow } from "enzyme";

describe('Tests in <PokeNavbar/>', function () {

    it('should match snapshot', function () {

        const wrapper = shallow(<PokeNavbar/>)
        expect(wrapper).toMatchSnapshot();
    });
});