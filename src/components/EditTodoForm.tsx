import { useState } from 'react';
import type { Todo } from '../types/todo';
import Button from './Button';
import Input from './Input';

type EditTodoFormProps = Todo & {
  toggleEditing: () => void;
  updateTodo: (id: Todo['id'], title: string) => void;
};

export default function EditTodoForm({
  id,
  title,
  toggleEditing,
  updateTodo
}: EditTodoFormProps) {
  const [titleInput, setTitleInput] = useState(title);
  return (
    <>
      <Input
        value={titleInput}
        onChange={(e) => setTitleInput(e.target.value)}
      />
      <div className="flex gap-2">
        <Button className="bg-blue-500 text-white">Update</Button>
        <Button className="bg-red-500 text-white" onClick={toggleEditing}>
          Cancel
        </Button>
      </div>
    </>
  );
}
