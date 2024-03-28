import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function AppTodo({task}) {
    return(
        <div className="todo">
            <p>{task.task}</p>
            <div>
                <i><FontAwesomeIcon icon={faPenToSquare}/></i>
                <i><FontAwesomeIcon icon={faTrash}/></i>
            </div>
        </div>
    )
}
