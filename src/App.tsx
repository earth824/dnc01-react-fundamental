function App() {
  // 1. single root element
  // const el = <h1>Sawasdee</h1><p>Tessss</p>;
  // const name = 'Josh';
  // function getAge() {
  //   return 35;
  // }

  const cssStyle: React.CSSProperties = {
    color: 'red',
    backgroundColor: 'green',
    textAlign: 'center'
  };

  return (
    <div>
      {/* 1. single root element //{' '}
      <main>
        <div>Hello</div>
        <div>World</div>
        
      </main> */}
      {/* 2. must close tag (2 method) */}
      {/* <img src="http://blabla.com" />
      <br />
      <br></br>
      <button>Click</button> */}

      {/* 3. camelCase */}
      {/* <h1 className="text-lg">Product</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <button onClick="">Click</button>
        <form action="" }></form>
      </div> */}

      {/* 4. Embedded expression */}
      {/* string, number, function result(string, number, array), array */}
      {/* <p>{name}</p>
      <p>{100 - 80}</p>
      <h1>{getAge()}</h1>
      <div>{['you', 'big', 'mark']}</div> */}
      {/*  */}
      {/* <p>------------------</p> */}
      {/* render nothing: boolean, null, undefined */}
      {/* <p>{false}</p>
      <h2>{null}</h2>
      <h3>{undefined}</h3>
      <div>{[null, true]}</div>
      <p>******************</p> */}
      {/* render object: error occurred */}
      {/* <div>{{ name: 'john', age: 20 }}</div> */}

      {/* 5. Inline style */}
      {/* <div style="color: green;text-align:center;height: 200px"></div> */}
      <div
        // style={{
        //   color: 'red',
        //   backgroundColor: 'green',
        //   textAlign: 'center'
        // }}
        style={cssStyle}
      >
        Hello World
      </div>
    </div>
  );
}

export default App;
