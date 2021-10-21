import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';

function App() {
  return (
    <div className="App">
      <h1>Login Page </h1>
      <label>Username:
      <input type="text" className="username" name="username"/>
      </label>
      <label>Password:
      <input type="password" className="password" name="password"/>
      </label>
      <button type = "button" className = "Submit-button">Submit</button>
    </div>
  );
}
export default App;
