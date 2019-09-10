import React from "react";
import AddRecipe from "../routes/AddRecipe/AddRecipe";
import { shallow } from 'enzyme';

it("renders without crashing", () => {
  shallow(<AddRecipe />);
});