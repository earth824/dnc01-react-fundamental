import type { Todo } from '../types/todo';
import Button from './Button';

type TodoContentProps = Todo & {
  deleteTodo: (id: Todo['id']) => void;
  toggleEditing: () => void;
};

export default function TodoContent({
  id,
  title,
  deleteTodo,
  toggleEditing
}: TodoContentProps) {
  return (
    <>
      <span>{title}</span>
      <div className="flex gap-2">
        <Button className="bg-blue-500 text-white" onClick={toggleEditing}>
          Edit
        </Button>
        <Button
          className="bg-red-500 text-white"
          onClick={() => deleteTodo(id)}
        >
          Delete
        </Button>
      </div>
    </>
  );
}
