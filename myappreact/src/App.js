import './App.css';
import { Message } from './Components/Message';
import { Counter } from './Components/Counter';

const messageText = "lesson 1";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        My React App
        <h3>Hello, {props.name}</h3>
        <Message text={messageText}/>
        <Counter />
      </header>
    </div>
  );
};

export default App;