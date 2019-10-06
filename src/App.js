import React, {Component} from 'react';
import { connect } from 'react-redux';
import './styles/App.scss';
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';

import { checkValidToken } from './actions/loginActions';

const PrivateRoute = ({ ...props }) => {
    if(!props.redirectToLogin) {
        return <Route { ...props } />;
    } else {
        return <Redirect to="/login" />;
    }
};

class App extends Component {

    componentDidMount() {
        let {user} = this.props;
        if(user.token) {
            this.props.checkValidToken(user.token);
        }
    }


    render() {
        let {isValidToken} = this.props;

        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <PrivateRoute path="/" redirectToLogin={!isValidToken} component={Main} />
                    </Switch>
                </Router>
            </div>
        );
    }

}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        user: state.login.user,
        isValidToken: state.login.isValidToken
    }
};

const mapDispatchToProps = {
    checkValidToken
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
