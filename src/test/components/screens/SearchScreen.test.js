import SearchScreen from "../../../components/screens/SearchScreen";
import {mount, shallow} from "enzyme";
import React from "react";

describe('Tests in <SearchScreen/>', function () {

    it('should match snapshot', function () {

        const wrapper = shallow(<SearchScreen/>)

        expect(wrapper).toMatchSnapshot();
    });

});
