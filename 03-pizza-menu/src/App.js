import logo from "./logo.svg";
import "./header.css";
function App() {
  return (
    <header className="header">
      <div className="brand-info">
        <a href="./home">
          <img src={logo} className="logo" alt="Logo" />
        </a>
        <h1>Pizza Menu</h1>
      </div>

      <nav className="navbar">
        <a href="./home">Home</a>
        <a href="./menu">Menu</a>
        <a href="./contact">Contact</a>
        <a href="./about">About</a>
      </nav>
    </header>
  );
}

export default App;
