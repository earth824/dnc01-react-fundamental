import Button from './Button';
import Input from './Input';

export default function CreateTodoForm() {
  return (
    <>
      <Input />
      <Button
        onClick={() => {
          console.log('click');
        }}
      >
        Save
      </Button>
    </>
  );
}
