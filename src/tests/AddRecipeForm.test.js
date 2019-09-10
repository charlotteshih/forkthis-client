import React from "react";
import AddRecipeForm from "../components/AddRecipeForm/AddRecipeForm";
import { shallow } from 'enzyme';

it("renders without crashing", () => {
  shallow(<AddRecipeForm />);
});