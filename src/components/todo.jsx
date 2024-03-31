import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function AppTodo({task, toggleComplete, deleteTodo, editTodo}) {
    return(
        <div className="todo">
            <p onClick={()=> toggleComplete(task.id)} className={`${task.completed ? "completed" : ""} `}>{task.task}</p>
            <div>
                <i><FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} /></i>
                <i><FontAwesomeIcon icon={faTrash} onClick={()=> deleteTodo(task.id)} /></i>
            </div>
        </div>
    )
}
