import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import NoteState from './context/notes/NoteState';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
    <NoteState>
    <Route>
    <div className="App">
    iNotebook Here Guys.
    </div>
    <Navbar/>

          <Route exact path="./component/about">
            <About />
          </Route>
          <Route exact path="./component/users">
            <Users />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>

    </Route>
    </NoteState>
    </>
  );
}

export default App;
