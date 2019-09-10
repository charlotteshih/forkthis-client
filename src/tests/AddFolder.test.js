import React from "react";
import AddFolder from "../components/AddFolder/AddFolder";
import { shallow } from 'enzyme';

it("renders without crashing", () => {
  shallow(<AddFolder />);
});