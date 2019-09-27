import React from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './components/Login';

function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <Route exact path="/login" component={Login} />
            </div>
        </Router>
    </div>
  );
}

export default App;
