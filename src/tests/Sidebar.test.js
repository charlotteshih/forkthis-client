import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { shallow } from 'enzyme';

it("renders without crashing", () => {
  shallow(<Sidebar />);
});