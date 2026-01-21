function App() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col gap-6 p-8">
        <div className="flex gap-4">
          <input
            type="text"
            className="outline-none w-full border border-gray-400 rounded-md h-9 px-3"
          />
          <button className="bg-gray-200 px-4 py-2 h-9 rounded-md text-sm">
            Save
          </button>
        </div>

        <div className="border-y border-gray-400 divide-y divide-gray-400">
          <div className="p-4 flex justify-between items-center">
            <span>Todo List Title</span>
            <div className="flex gap-2">
              <button className="bg-blue-500 text-white px-4 py-2 h-9 rounded-md text-sm">
                Edit
              </button>
              <button className="bg-red-500 text-white px-4 py-2 h-9 rounded-md text-sm">
                Delete
              </button>
            </div>
          </div>

          <div className="p-4 flex justify-between items-center">
            <span>Todo List Title</span>
            <div className="flex gap-2">
              <button className="bg-blue-500 text-white px-4 py-2 h-9 rounded-md text-sm">
                Edit
              </button>
              <button className="bg-red-500 text-white px-4 py-2 h-9 rounded-md text-sm">
                Delete
              </button>
            </div>
          </div>

          <div className="p-4 flex justify-between items-center">
            <span>Todo List Title</span>
            <div className="flex gap-2">
              <button className="bg-blue-500 text-white px-4 py-2 h-9 rounded-md text-sm">
                Edit
              </button>
              <button className="bg-red-500 text-white px-4 py-2 h-9 rounded-md text-sm">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
