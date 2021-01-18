import logo from "./logo.jpg";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Profile />
    </div>
  );
}

export default App;
