import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { Loader } from "../../components/Loader/Loader";

test("should render Loader correctly", () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<Loader />);
  expect(result).toMatchSnapshot();
});
