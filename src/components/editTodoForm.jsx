import { useState } from "react";

export default function AppEditTodoForm({ editTodo, task }) {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);

    // to ensure after todo has been sent in, the input returns back to nothing
    setValue("");
  };

  return (
    <form action="" className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-submit">
        Update task
      </button>
    </form>
  );
}
