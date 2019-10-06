import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { logout } from '../actions/loginActions';

// Material-UI components
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

class Main extends Component {

    handleLogout = () => {
        this.props.logout();
    }

    render() {
        const {user, isValidToken} = this.props;

        if(!isValidToken) {
            return <Redirect to='/login' />;
        }

        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className='grid-login'
            >
                <CssBaseline/>
                <Container component='main' maxWidth='xs' className='login-container'>
                    <h2>Hello, {user.username} <a href='#' onClick={this.handleLogout}>Logout</a></h2>
                </Container>
            </Grid>
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
    logout
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)