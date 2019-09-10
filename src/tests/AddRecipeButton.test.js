import React from "react";
import AddRecipeButton from "../components/AddRecipeButton/AddRecipeButton";
import { shallow } from 'enzyme';

it("renders without crashing", () => {
  shallow(<AddRecipeButton />);
});