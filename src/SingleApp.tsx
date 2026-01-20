function App() {
  const discountReebok = 0;
  const normalReebokPrice = 1590;
  return (
    <div className="flex gap-8">
      <div className="border p-4 rounded-md">
        <h1>ASICS Sonicblast</h1>
        <h2>ASICS</h2>
        <p>6900</p>
      </div>
      <div className="border p-4 rounded-md">
        <h1>REEBOK MUNDO</h1>
        <h2>REBOK</h2>
        <p>
          {discountReebok === 0
            ? normalReebokPrice
            : normalReebokPrice * (1 - discountReebok)}
        </p>
        {discountReebok !== 0 && (
          <div className="bg-red-500 w-6 h-6 rounded-full">
            {discountReebok}
          </div>
        )}
        {discountReebok !== 0 ? (
          <div className="bg-red-500 w-6 h-6 rounded-full">
            {discountReebok}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;

// 1 && 2; // 2
// true && 'hello'; // hello
// false && 'world'; // false
