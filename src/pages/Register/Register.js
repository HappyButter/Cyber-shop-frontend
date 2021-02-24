import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { AccountManagementWrapper, RedirectLink } from 'styles/AccountManagement.css'
import { useSnackbar } from 'notistack';

import { useSelector, useDispatch } from 'react-redux';
import { submitRegister } from 'state/auth/authActions';
import { Redirect } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
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

    const { enqueueSnackbar } = useSnackbar();

    const validateName = () => {
        const regName = /[0-9]+/g;
        return ( !regName.test(name) && name.length > 2 )
    }

    const validateSurname = () => {
        const regName = /[0-9]+/g;
        return ( !regName.test(surname) && surname.length > 2 )
    }
  
    const validateEmail = () => {
        const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return (regEmail.test(email) && email.length > 1);
    }

    const validatePhoneNumber = () => {
        const regPhoneNumber = /[0-9]{3}-[0-9]{3}-[0-9]{3}/;
        return (regPhoneNumber.test(phoneNumber) && phoneNumber.length === 11);
    }

    const validatePassword = () => {
        return password.length > 4 && password.length < 30;
    }
    
    const validate = () => {
        let isValid = validateName()
                        && validateSurname()
                        && validateEmail()
                        && validatePhoneNumber()
                        && validatePassword();
        return isValid; 
    }


    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleSubmitRegister = (e) => {
        e.preventDefault();

        validate() 
        ? dispatch(submitRegister({ name, surname, phoneNumber, email, password, enqueueSnackbar }))
        : enqueueSnackbar("Popraw dane i spróbuj ponownie")
    }

    return (
        <AccountManagementWrapper component="main" maxWidth="xs">
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
                                helperText={validateName() ? null : "Imię powinno być dłuższe niż 2 znaki i nie powinno zawierać cyfr"}
                                error={!validateName()}
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
                                helperText={validateSurname() ? null : "Nazwisko powinno być dłuższe niż 2 znaki i nie powinno zawierać cyfr"}
                                error={!validateSurname()}
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
                                helperText={validateEmail() ? null : "Wpisz poprawny email"}
                                error={!validateEmail()}
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
                                placeholder="format: 123-123-123"
                                helperText={validatePhoneNumber() ? null :"format: 123-123-123"}
                                error={!validatePhoneNumber()}
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
                                helperText={validatePassword() ? null :"Hasło powinno zawierać co najmniej 4 znaki"}
                                error={!validatePassword()}
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
                            <RedirectLink to="/login" >
                                Masz już konto? Zaloguj się!
                            </RedirectLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
            { auth.isLoggedIn === true ? <Redirect to="/" /> : null }

        </AccountManagementWrapper>
    );
}

export default Register;