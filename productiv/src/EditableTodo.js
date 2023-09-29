import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {
  /** Toggle if this is being edited */
  const [isEditing, setIsEditing] = useState(false);
  /**
   * Toggle todo to be rendered as editable todo
   */
  //TODO: wrap in arrow fn (any state setting fn should be callback)
  function toggleEdit() {
    setIsEditing(!isEditing);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    update({ ...formData, id: todo.id });
    toggleEdit();
  }

  /**
   *  Render a todo as normal
   */
  function renderTodo() {
    return (
      <div className="mb-3">
        <div className="float-end text-sm-end">
          <button
            className="EditableTodo-toggle btn-link btn btn-sm"
            onClick={toggleEdit}
          >
            Edit
          </button>
          <button
            className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
            onClick={handleDelete}
          >
            Del
          </button>
        </div>
        <Todo todo={todo} />
      </div>
    );
  }

  return (
    <div className="EditableTodo">
      {isEditing ? (
        <TodoForm handleSave={handleSave} initialFormData={todo} />
      ) : (
        renderTodo()
      )}
    </div>
  );
}

export default EditableTodo;
