
import { useTodoStore } from "../context/todo.context"


export default function GautamPage() {
    const { todos, deleteTodo, toggleTodo } = useTodoStore()


    return (
        <div>
            {todos.map((todo) => (
                <div
                    key={todo.id}
                    className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
                >
                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            checked={todo.isCompleted}
                            onChange={() => toggleTodo(todo.id)}
                            className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className={`text-gray-800 ${todo.isCompleted ? 'line-through text-gray-400' : ''}`}>
                            {todo.title}
                        </span>
                    </div>
                    <button
                        onClick={() => deleteTodo(todo.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            ))}
        </div>
    )
}
