import React from "react";
import StepsList from "../components/StepsList/StepsList";
import { shallow } from 'enzyme';

it("renders without crashing", () => {
  shallow(<StepsList />);
});