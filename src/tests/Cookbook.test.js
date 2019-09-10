import React from "react";
import Cookbook from "../routes/Cookbook/Cookbook";
import { shallow } from 'enzyme';

it("renders without crashing", () => {
  shallow(<Cookbook />);
});