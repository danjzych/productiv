import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";
update = jest.fn();
remove = jest.fn();

const testTodos =
  [
    {
      id: 1,
      title: "Code!",
      description: "Write some code",
      priority: 2,
    },
    {
      id: 2,
      title: "Make dinner",
      description: "Cook something healthy",
      priority: 1,
    },
    {
      id: 3,
      title: "Go to bed",
      description: "In bed by 11:15",
      priority: 3,
    },
  ];



it("renders", function () {
  render(<EditableTodoList todos={testTodos} update={update} remove={remove} />);
});

it("passes snapshot", function () {
  const { container } = render(<EditableTodoList todos={testTodos} update={update} remove={remove} />);

  expect(container).toMatchSnapshot();
});

it("renders props correctly", function () {
  const { container } = render(<EditableTodoList todos={testTodos} update={update} remove={remove} />);

  expect(container).toHaveTextContent("Write some code");
  expect(container).toHaveTextContent("Cook something healthy");
  expect(container).toHaveTextContent("In bed by 11:15");
});

