import HomeScreen from "../../../components/screens/HomeScreen";
import React from "react";
import {shallow} from "enzyme";

describe('Test in <HomeScreen/>', function () {

    it('should match snapshot', function () {

        const wrapper = shallow(<HomeScreen/>)
        expect(wrapper).toMatchSnapshot();
    });

});