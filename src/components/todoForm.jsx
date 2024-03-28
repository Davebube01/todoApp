import { useState } from "react";

export default function AppTodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);

    // to ensure after todo has been sent in, the input returns back to nothing
    setValue("");
  };

  return (
    <form action="" className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-submit">
        Add Task
      </button>
    </form>
  );
}
