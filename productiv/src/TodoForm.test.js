import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";

handleSave = jest.fn();

const testTodo = {
  id: 1,
  title: "Code!",
  description: "Write some code",
  priority: 2,
};

describe("when editing existing Todo", function () {
  it("renders", function () {
    render(<TodoForm initialFormData={testTodo} handleSave={handleSave} />);
  });

  it("passes snapshot", function () {
    const { container } = render(<TodoForm initialFormData={testTodo} handleSave={handleSave} />);

    expect(container).toMatchSnapshot();
  });

  it("renders props correctly", function () {
    const { container } = render(<TodoForm initialFormData={testTodo} handleSave={handleSave} />);

    expect(container).toContainHTML("NewTodoForm");
    expect(container).toHaveTextContent("Write some code");
    expect(container).toHaveTextContent("Über");
  });

  it("tracks form data state changes", function () {
    const { container, getByLabelText } = render(<TodoForm initialFormData={testTodo} handleSave={handleSave} />);

    expect(container).toHaveTextContent("Write some code");

    fireEvent.change(getByLabelText("Priority:"), { target: { value: "1" } });

    expect(container).toHaveTextContent("Ultra-Über");
  });
});


describe("when creating new Todo", function () {
  it("renders", function () {
    render(<TodoForm handleSave={handleSave} />);
  });

  it("passes snapshot", function () {
    const { container } = render(<TodoForm handleSave={handleSave} />);

    expect(container).toMatchSnapshot();
  });

  it("renders props correctly", function () {
    const { container } = render(<TodoForm handleSave={handleSave} />);

    expect(container).toContainHTML("NewTodoForm");
    expect(container).toHaveTextContent("Ultra-Über");
  });

  it("tracks form data state changes", function () {
    const { container, getByLabelText,
      getByPlaceholderText } = render(<TodoForm handleSave={handleSave} />);

    expect(container).toHaveTextContent("Ultra-Über");

    fireEvent.change(getByLabelText("Priority:"), { target: { value: "2" } });
    fireEvent.change(getByPlaceholderText("Description"), { target: { value: "Friday Test" } });

    expect(container).toHaveTextContent("Über");
    expect(container).toHaveTextContent("Friday Test");
  });
});