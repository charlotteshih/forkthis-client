import React from "react";
import IngredientsList from "../components/IngredientsList/IngredientsList";
import { shallow } from 'enzyme';

it("renders without crashing", () => {
  shallow(<IngredientsList />);
});