import { useState } from 'react';
import CreateTodoForm from './components/CreateTodoForm';
import TodoItem from './components/TodoItem';
import type { Todo } from './types/todo';

// const mockTodos: Todo[] = [{ id: crypto.randomUUID(), title: 'Read a book' }];

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col gap-6 p-8">
        <div className="flex gap-4">
          <CreateTodoForm />
        </div>
        <div className="border-y border-gray-400 divide-y divide-gray-400">
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
