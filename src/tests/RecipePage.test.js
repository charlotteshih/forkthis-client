import React from "react";
import RecipePage from "../routes/RecipePage/RecipePage";
import { shallow } from 'enzyme';

it("renders without crashing", () => {
  shallow(<RecipePage />);
});