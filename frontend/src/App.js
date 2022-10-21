import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import Success from './components/Success';
import Graphs from './components/Graphs';
import Sidebar from "./components/Sidebar"

function App() {
 
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="Alert-Message" />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/success">
                <Success />
              </Route>           
              <Route exact path="/graphs">
                <Graphs />
              </Route>
              <Route exact path="/sidebar">
                <Sidebar />
                
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
