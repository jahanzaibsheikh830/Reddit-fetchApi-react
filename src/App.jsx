import React from "react";
import Header from './components/Header'
import Login from './components/login'
import Home from './components/Home'
import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function App() {
    return (
        <div>
            <Header />
            <div>
                <nav className="nav">
                    <div className="container">
                        <span>/r/ReactJS - The Front Page of React</span>
                        <Router>
                    <div>
                        <ul className="ul">
                            <li>
                                <Link to="/" className='link'>Home</Link>
                            </li>
                            <li>
                                <Link to="/login" className='link'>Login</Link>
                            </li>
                        </ul>

                        <hr />
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/login">
                                <Login />
                            </Route>
                        </Switch>
                    </div>
                </Router>
                    </div>
                </nav>
                
            </div>
        </div>
    );
}

export default App;