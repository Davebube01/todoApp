import AppTodoForm from "./todoForm";
import { useState } from "react";
import AppTodo from "./todo";
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

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col sm={12} md={10} lg={6}>
            
          <div className="todo-wrapper">
          <h1>Get Things Done Innit!</h1>
            <AppTodoForm addTodo={addTodo} />
            {
                todos.map((todo, index) => {
                    // This is to map through the tasks inputed and put tehm in the list todo so
                    // as for them to be displayed
                    return <AppTodo task={todo} key={index} />
                })
            }
          </div>
        </Col>
      </Row>
    </Container>
  );
}
