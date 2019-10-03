import React, {Component} from 'react';
import { connect } from 'react-redux';
import './styles/App.scss';
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';

const PrivateRoute = ({ ...props }) => {
    let { user } = props;
    if(user.token) {
        return <Route { ...props } />;
    } else {
        return <Redirect to="/login" />;
    }
};

class App extends Component{

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <PrivateRoute path="/" user={this.props.user} component={Main} />
                    </Switch>
                </Router>
            </div>
        );
    }

}


const mapStateToProps = (state /*, ownProps*/) => {
    return {
        user: state.login.user
    }
};

const mapDispatchToProps = {

};

export default connect(
    mapStateToProps,
    mapDispatchToProps)(App);
