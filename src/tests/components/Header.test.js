import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { Header } from "../../components/Header/Header";

test("should render Header correctly", () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<Header />);
  expect(result).toMatchSnapshot();
});
