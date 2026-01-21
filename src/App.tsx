import { useState } from 'react';

type Todo = {
  id: string;
  title: string;
};

const initialTodos: Todo[] = [
  {
    id: crypto.randomUUID(),
    title: 'Learn React'
  }
];

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [input, setInput] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingInput, setEditingInput] = useState('');

  const handleClickSave = () => {
    const newTodo: Todo = { id: crypto.randomUUID(), title: input };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInput('');
  };

  const handleClickDelete = (id: string) => {
    // [
    //   { id: 'c806d6a4-8db7-4888-b6b9-ef784a691ebd', title },
    //   { id: '2316ba3c-612d-4c47-a26a-c36213ccb7ae', title },
    //   { id: '60cc6aa5-3440-4900-a63c-d63895dd1bd7', title },
    //   { id: '862efc9c-4483-4c0b-895b-482a72b391ef', title }
    // ].filter(el => el.id !== '60cc6aa5-3440-4900-a63c-d63895dd1bd7');
    const newTodos = todos.filter((el) => el.id !== id);
    setTodos(newTodos);
  };

  const handleClickEdit = (id: string, title: string) => {
    setEditingId(id);
    setEditingInput(title);
  };

  const handleClickUpdate = () => {
    setTodos(
      todos.map((el) =>
        el.id === editingId ? { ...el, title: editingInput } : el
      )
    );
    setEditingId(null);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col gap-6 p-8">
        <div className="flex gap-4">
          <input
            type="text"
            className="outline-none w-full border border-gray-400 rounded-md h-9 px-3"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-gray-200 px-4 py-2 h-9 rounded-md text-sm"
            disabled={input.trim() === ''}
            onClick={handleClickSave}
          >
            Save
          </button>
        </div>

        <div className="border-y border-gray-400 divide-y divide-gray-400">
          {todos.map((el) => (
            <div
              className="p-4 flex justify-between gap-4 items-center"
              key={el.id}
            >
              {editingId === el.id ? (
                <input
                  type="text"
                  className="w-full h-9 px-3 rounded-md border border-gray-400 outline-none"
                  value={editingInput}
                  onChange={(e) => setEditingInput(e.target.value)}
                />
              ) : (
                <span>
                  {el.title} {el.id}
                </span>
              )}
              <div className="flex gap-2">
                {editingId === el.id ? (
                  <>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 h-9 rounded-md text-sm"
                      onClick={handleClickUpdate}
                    >
                      Update
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 h-9 rounded-md text-sm"
                      onClick={() => {
                        setEditingId(null);
                      }}
                    >
                      Cancle
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 h-9 rounded-md text-sm"
                      onClick={() => handleClickEdit(el.id, el.title)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 h-9 rounded-md text-sm"
                      onClick={() => handleClickDelete(el.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
