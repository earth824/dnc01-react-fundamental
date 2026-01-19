// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

function Header() {
  return (
    <header style={{ fontSize: 36, color: 'yellowgreen' }}>
      <div className="app-logo">
        <img src="http://" alt="" />
      </div>
      This is the app header
    </header>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
// <StrictMode>
// <>
//   <Header />
//   {/* <Header></Header> */}
//   {/* {Header()} */}
//   <App />
//   {/* {App()} */}
//   <div>
//     <Header />
//     <main>
//       <p></p>
//       <App />
//       <form action="">
//         <div>
//           <label htmlFor=""></label>
//           <input type="text" />
//         </div>
//       </form>
//     </main>
//     <aside></aside>
//   </div>
// </>
// <><header>This is the app header</header><h1>App Component</h1></>
// </StrictMode>
