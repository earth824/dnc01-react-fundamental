import type { Todo } from '../types/todo';
import Button from './Button';

type TodoItemProps = Todo & {
  deleteTodo: (id: Todo['id']) => void;
};
// type TodoItemProps = {
//   todo: Todo;
// };

export default function TodoItem({ id, title, deleteTodo }: TodoItemProps) {
  return (
    <div className="p-4 flex justify-between items-center">
      <span>{title}</span>
      <div className="flex gap-2">
        <Button className="bg-blue-500 text-white">Edit</Button>
        <Button
          className="bg-red-500 text-white"
          onClick={() => deleteTodo(id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
