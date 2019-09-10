import React from "react";
import FoldersList from "../components/FoldersList/FoldersList";
import { shallow } from 'enzyme';

it("renders without crashing", () => {
  shallow(<FoldersList />);
});