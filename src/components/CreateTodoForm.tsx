import { useState } from 'react';
import Button from './Button';
import Input from './Input';

type CreateTodoFormProps = {
  createTodo: (title: string) => void;
  // setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
};

export default function CreateTodoForm({ createTodo }: CreateTodoFormProps) {
  const [titleInput, setTitleInput] = useState('');

  return (
    <>
      <Input
        value={titleInput}
        onChange={(e) => setTitleInput(e.target.value)}
      />
      <Button
        onClick={() => {
          createTodo(titleInput);
          setTitleInput('');
        }}
        disabled={titleInput.trim() === ''}
      >
        Save
      </Button>
    </>
  );
}
