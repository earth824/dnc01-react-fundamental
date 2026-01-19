function App() {
  // App is parent component of Header and Footer
  return (
    // React Fragment
    <>
      <Header /> {/* child component of App  */}
      <h1>App Component</h1>
      <Footer /> {/* child component of App  */}
    </>
  );
}

export default App;

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

function Footer() {
  return (
    <footer>
      <div>Contact</div>
      <div>Help</div>
    </footer>
  );
}
