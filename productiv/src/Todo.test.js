import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

const testTodo = {
  id: 1,
  title: "test",
  description: "test",
  priority: 1,
};

it("renders", function () {
  render(<Todo todo={testTodo} />);
});

it("passes snapshot", function () {
  const { container } = render(<Todo todo={testTodo} />);

  expect(container).toMatchSnapshot();
});

it("renders props correctly", function () {
  const { container } = render(<Todo todo={testTodo} />);

  expect(container).toHaveTextContent("test");
  expect(container).toHaveTextContent("1");
});
