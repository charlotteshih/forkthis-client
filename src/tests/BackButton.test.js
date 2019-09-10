import React from "react";
import BackButton from "../components/BackButton/BackButton";
import { shallow } from 'enzyme';

it("renders without crashing", () => {
  shallow(<BackButton />);
});