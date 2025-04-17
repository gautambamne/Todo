import { create } from "zustand";
import { persist } from "zustand/middleware";


export interface ITodo {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface TodoStore {
  todos: ITodo[];
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],
      addTodo: (title: string) =>
        set((state) => ({
          todos: [
            ...state.todos,
            { id: String(Date.now()), title, isCompleted: false },
          ],
        })),
      toggleTodo: (id: string) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id
              ? { ...todo, isCompleted: !todo.isCompleted }
              : todo
          ),
        })),
      deleteTodo: (id: string) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
    }),
    {
      name: "todo-storage", // key used in localStorage
    }
  )
);

