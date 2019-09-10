import React from "react";
import RecipeHeader from "../components/RecipeHeader/RecipeHeader";
import { shallow } from 'enzyme';

it("renders without crashing", () => {
  shallow(<RecipeHeader />);
});