import React from "react";
import PageNotFound from "../routes/PageNotFound/PageNotFound";
import { shallow } from 'enzyme';

it("renders without crashing", () => {
  shallow(<PageNotFound />);
});