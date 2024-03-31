import AppTodoForm from "./todoForm";
import { useState } from "react";
import AppTodo from "./todo";
import AppEditTodoForm from "./editTodoForm";
import { v4 as uuidv4 } from "uuid";
uuidv4;

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AppTodoWrapper() {
  const [todos, setTodos] = useState([]);

  //   function to create new entry in the todo list with unique ids and all
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  //   Toggle complete function creation
  //   of course check this function for further understanding
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //   Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //   Edit Todo
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  //   currently edting task function
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col sm={12} md={10} lg={6}>
          <div className="todo-wrapper">
            <h1>Get Things Done Innit!</h1>
            <AppTodoForm addTodo={addTodo} />
            {todos.map((todo, index) => {
              // This is to map through the tasks inputed and put them in the list todo so
              // as for them to be displayed
              return todo.isEditing ? (
                <AppEditTodoForm editTodo={editTask} task={todo}/>
              ) : (
                <AppTodo
                  task={todo}
                  key={index}
                  toggleComplete={toggleComplete}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                />
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
