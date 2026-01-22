import { useState } from 'react';
import type { DeleteTodo, Todo, UpdateTodo } from '../types/todo';
import TodoContent from './TodoContent';
import EditTodoForm from './EditTodoForm';

type TodoItemProps = Todo & {
  deleteTodo: DeleteTodo;
  updateTodo: UpdateTodo;
};
// type TodoItemProps = {
//   todo: Todo;
// };

export default function TodoItem(props: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = (): void => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="p-4 flex justify-between items-center gap-4">
      {isEditing ? (
        <EditTodoForm toggleEditing={toggleEditing} {...props} />
      ) : (
        <TodoContent {...props} toggleEditing={toggleEditing} />
      )}
    </div>
  );
}
