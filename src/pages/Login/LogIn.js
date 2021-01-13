import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { CustomTextField, SignInWrapper } from './logIn.css';
import { withRouter, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../state/auth/authActions';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    height: 60,
    margin: theme.spacing(3, 0, 2),
  },
}));

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({email, password}));

  } 


  return (
    <SignInWrapper component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form 
          className={classes.form} 
          onSubmit={handleSubmit}>
          <CustomTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(event) => setEmail(event.target.value)}
          />
          <CustomTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>

          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    { auth.isLoggedIn ? <Redirect to="/" /> : null  }
    </SignInWrapper>
  );
}

export default withRouter(LogIn);