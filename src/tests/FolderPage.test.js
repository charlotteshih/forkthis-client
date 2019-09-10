import React from "react";
import FolderPage from "../routes/FolderPage/FolderPage";
import { shallow } from 'enzyme';

it("renders without crashing", () => {
  shallow(<FolderPage />);
});