import { useState, useId } from 'react';

// { name: string, age: number, dob?: Date }

// type Person = { name: string; age: number; dob?: Date };

export default function App() {
  const [count, setCount] = useState(0);
  const [friends, setFriends] = useState<string[]>(['nan', 'oven']);
  // const [person, setPerson] = useState<Person>({ name: '', age: 0 }); // {} mean: not null and not undefined
  const [input, setInput] = useState('');

  return (
    <div className="p-12">
      {/* controlled component */}
      <input
        type="text"
        className="outline-none border border-gray-200"
        onChange={(event) => {
          // event.target ==> element that trigger the event ==> <input />
          // document.querySelector('input')
          // console.log(event.target.value);
          setInput(event.target.value);
        }}
        value={input}
      />
      <button
        className="bg-blue-500 px-4 py-2"
        onClick={() => {
          // setFriends((prevFriends) => {
          //   const cloneFriends = [...prevFriends];
          //   cloneFriends.push('ben');
          //   return cloneFriends;
          // });
          setFriends((prevFriends) => [...prevFriends, input]);
          setInput('');
          // setCount(0);
        }}
      >
        Add Friend
      </button>
      {friends.map((el) => (
        <p key={crypto.randomUUID()}>{el}</p>
      ))}
    </div>
  );
}

// function App() {
//   const [show, setShow] = useState(true);
//   return (
//     <>
//       <Counter />
//       {/* <button
//         className="bg-green-300"
//         onClick={() => {
//           setShow(!show);
//         }}
//       >
//         Toggle Counter
//       </button> */}
//       {/* {show && <Counter />} */}
//       {/* Counter() */}
//     </>
//   );
// }

// export default App;

// function Counter() {
//   // console.log('COUNTER RUN!!!');
//   // STATE CHANGE ==> COMPONENT RE-RENDER (FUNCTION RE-RUN)
//   // REACT REACTS TO STATE CHANGE BY RE-RENDERING THE UI
//   // useState hook
//   // useState(initialStateValue)
//   const [count, setCount] = useState(5); // create state: count with initial value equal to 5
//   // let a = 5;
//   return (
//     <div className="space-x-4">
//       <button className="bg-gray-200 p-2 hover:cursor-pointer">-</button>
//       {/* <span>{count}</span> */}
//       <Value data={count} />
//       {/* Value() */}
//       <button
//         className="bg-gray-200 p-2 hover:cursor-pointer"
//         // onClick={() => {
//         //   setCount(count + 1);
//         //   a = a + 1;
//         // }}
//         // STATE BATCH UPDATE
//         onClick={() => {
//           // setCount(0); // 5+1 !==> 6
//           setCount(count + 1); // 5+1 !==> 6
//           // setCount(count + 1); // 5+1 !==> 6
//           // const result = [];
//           // setCount((prevCount) => {
//           //   console.log(prevCount);
//           //   // result.push()
//           //   return prevCount + 1;
//           // }); // 5+1 ==> 6 (tempolary)
//           // setCount(count + 1);
//           // console.log(count);
//           // setCount((prevCount) => {
//           //   console.log(prevCount);
//           //   return prevCount + 1;
//           // }); // 6+1 ==> 7 (tempolary)
//           // setCount(1);
//           // console.log(count);
//           // setCount((prevCount) => prevCount + 1); // 7+1 ==> 8 (tempolary)
//         }}
//       >
//         +
//       </button>
//     </div>
//   );
// }

// function Value({ data }: { data: number }) {
//   // console.log('VALUE RUN!!!!');
//   return <span>{data}</span>;
// }

// function Counter() {
//   console.log('COUNTER RUN!!!');
//   // STATE CHANGE ==> COMPONENT RE-RENDER (FUNCTION RE-RUN)
//   // REACT REACTS TO STATE CHANGE BY RE-RENDERING THE UI
//   let currentValue = 5;

//   return (
//     <div className="space-x-4">
//       <button className="bg-gray-200 p-2 hover:cursor-pointer">-</button>
//       <span>{currentValue}</span>
//       <button
//         className="bg-gray-200 p-2 hover:cursor-pointer"
//         onClick={() => {
//           currentValue = currentValue + 1;
//           console.log(currentValue);
//         }}
//       >
//         +
//       </button>
//     </div>
//   );
// }

// const a = [0, 1];
// const b = [0, 1];
// console.log(a === b);
