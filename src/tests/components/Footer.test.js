import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { Footer } from "../../components/Footer/Footer";

test("should render Footer correctly", () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<Footer />);
  expect(result).toMatchSnapshot();
});
