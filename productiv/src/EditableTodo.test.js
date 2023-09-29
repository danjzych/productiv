import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

const testProps = {
  id: 1,
  title: "test",
  description: "test",
  priority: 1,
};

it("renders", function () {
  render(<EditableTodo todo={testProps} />);
});

it("matches snapshot", function () {
  const { container } = render(<EditableTodo todo={testProps} />);

  expect(container).toMatchSnapshot();
});

it("renders Todo subcomponent with passed in props", function () {
  const { container } = render(<EditableTodo todo={testProps} />);

  const todoComponent = container.querySelector(".Todo");

  expect(todoComponent).toBeInTheDocument();
  expect(todoComponent).toHaveTextContent("test");
  expect(todoComponent).toHaveTextContent(1);
});

it("toggles to edit form when clicked", function () {
  const { container } = render(<EditableTodo todo={testProps} />);

  fireEvent.click(container.querySelector(".EditableTodo-toggle"));

  const editForm = container.querySelector(".NewTodoForm");

  expect(editForm).toBeInTheDocument();
  expect(editForm).toHaveTextContent("test");
  expect(editForm).toHaveTextContent("Ultra-Über");
});
