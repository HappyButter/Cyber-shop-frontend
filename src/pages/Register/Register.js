
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { RegisterWrapper } from './register.css';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../state/auth/authActions';
import { Redirect } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: theme.spacing(3),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        height: 60,
        margin: theme.spacing(3, 0, 2),
    },
}));

const Register = () => {
    const classes = useStyles();
    
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    
  
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const handleSubmitRegister = (e) => {
        e.preventDefault();

        // TO DO: client validation
        dispatch(register({ name, surname, phoneNumber, email, password }));
    }

    return (
        <RegisterWrapper component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <PersonAddRoundedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Rejestracja
                </Typography>
                <form className={classes.form} onSubmit={handleSubmitRegister}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="name"
                                required
                                fullWidth
                                id="name"
                                label="Imię"
                                autoFocus
                                onChange={(event) => setName(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="family-name"
                                required
                                fullWidth
                                id="lastName"
                                label="Nazwisko"
                                name="lastName"
                                onChange={(event) => setSurname(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                type="tel"
                                name="phoneNumber"
                                label="Numer telefonu"
                                id="phoneNumber"
                                autoComplete="tel-national"
                                onChange={(event) => setPhoneNumber(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Hasło"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Zarejestruj
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="/login" variant="body1">
                                Masz już konto? Zaloguj się!
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            { auth.isLoggedIn ? <Redirect to="/" /> : null  }
        </RegisterWrapper>
    );
}

export default Register;