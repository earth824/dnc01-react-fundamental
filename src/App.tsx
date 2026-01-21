import { useState } from 'react';

export default function App() {
  return (
    <div>
      <Counter />
      <div className="h-px bg-gray-200 my-4"></div>
      <Counter />
      <div className="h-px bg-gray-200 my-4"></div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex gap-4">
      <button className="bg-gray-200 px-4 py-2">-</button>
      <span>{count}</span>
      <button
        className="bg-gray-200 px-4 py-2"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
}
