import "bootstrap/dist/css/bootstrap.min.css";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppTodoWrapper from "./components/todoWrapper";

function App() {

  return (
    <>
      <div className="App">
        <AppTodoWrapper/>
      </div>
    </>
  )
}

export default App
