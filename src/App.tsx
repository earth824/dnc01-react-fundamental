import { useState } from 'react';
import CreateTodoForm from './components/CreateTodoForm';
import TodoItem from './components/TodoItem';
import type { CreateTodo, DeleteTodo, UpdateTodo, Todo } from './types/todo';

// const mockTodos: Todo[] = [{ id: crypto.randomUUID(), title: 'Read a book' }];

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const createTodo: CreateTodo = (title) => {
    const newTodo: Todo = { id: crypto.randomUUID(), title };
    const nextTodos = [...todos, newTodo];
    setTodos(nextTodos);
  };

  const deleteTodo: DeleteTodo = (id) => {
    const nextTodos = todos.filter((todo) => todo.id !== id);
    setTodos(nextTodos);
  };

  const updateTodo: UpdateTodo = (id, title) => {
    const nextTodos = todos.map((el) => (el.id === id ? { ...el, title } : el));
    setTodos(nextTodos);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col gap-6 p-8">
        <div className="flex gap-4">
          <CreateTodoForm createTodo={createTodo} />
        </div>
        <div className="border-y border-gray-400 divide-y divide-gray-400">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              {...todo}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
