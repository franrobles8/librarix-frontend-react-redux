import { connect } from 'react-redux';
import React, { Component } from 'react';
import { login, setErrorLoginFalse } from '../actions/loginActions';

import SnackbarWrapper from '../components/SnackbarWrapper';

// Material-UI components
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

class Login extends Component {

    render() {
        console.log(this.props);
        let {loading, login, errorLogin, setErrorLoginFalse} = this.props;
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
                    <Avatar className='avatar'>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" className='text-login-title'>
                        Sign in
                    </Typography>
                    <form className='form' noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <div className="wrapper-button-login">
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className='submit'
                                disabled={loading}
                                onClick={login}
                            >
                                Sign In
                            </Button>
                            {loading && <CircularProgress size={24} className='buttonProgress' />}
                            <SnackbarWrapper
                                variant="error"
                                className=''
                                message="Wrong email and/or password!"
                                show={errorLogin}
                                handleClose={setErrorLoginFalse}

                            />
                        </div>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </Grid>
        );
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        loading: state.login.loading,
        user: state.login.user,
        errorLogin: state.login.errorLogin
    }
};

const mapDispatchToProps = {
    login,
    setErrorLoginFalse
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)