import logo from './logo.svg';
import './App.css';
import TaskListComponent from "./components/container/task__list";
import ContactList from "./components/container/contact__list";

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>
          {/* Componente de listado de tareas */ }
          {/* <TaskListComponent></TaskListComponent> */ }
          <ContactList></ContactList>
        </p>
      </header>
    </div>
  );
}

export default App;
