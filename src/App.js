import logo from './logo.svg';
import './App.css';
import Greeting from "./components/pure/greeting";
import GreetingFuncion from "./components/pure/greetingFuncion";

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>
          {/* components */ }
          {/* name es la props de grettings */ }
          {/* <Greeting name="Miryam"></Greeting> */ }
          <GreetingFuncion name="Miryam"></GreetingFuncion>
        </p>
      </header>
    </div>
  );
}

export default App;
