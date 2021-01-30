import React, { useEffect, useState } from 'react';
import { AppBar } from 'components';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { AccountDataWrapper } from './account.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateAccountData } from 'state/auth/authActions';
import { Redirect } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: theme.spacing(10),
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



const Account = () => {
    const classes = useStyles();
    
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    
    const userData = useSelector( state => state.auth.user);
    const auth = useSelector(state => state.auth);
    
    useEffect( () => {
        setName(userData.name);
        setSurname(userData.surname);
        setPhoneNumber(userData.phoneNumber);
    },[userData])

    const dispatch = useDispatch();
    const handleSubmitRegister = (e) => {
        e.preventDefault();

        // TO DO: client validation
        const userId = userData.id;
        dispatch(updateAccountData({ userId, name, surname, phoneNumber }));
    }

    return (
        <>
            <AppBar></AppBar>
            <br/>
            <AccountDataWrapper component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AccountCircleIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Moje dane
                </Typography>
                <form className={classes.form} onSubmit={handleSubmitRegister}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="name"
                                fullWidth
                                required
                                id="name"
                                label="Imię"
                                variant="filled"
                                value={name}
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
                                variant="filled"
                                value={surname}
                                onChange={(event) => setSurname(event.target.value)}
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
                                variant="filled"
                                value={phoneNumber}
                                onChange={(event) => setPhoneNumber(event.target.value)}
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
                        Zapisz zmiany
                    </Button>
                </form>
            </div>
            { !auth.isLoggedIn ? <Redirect to="/" /> : null  }
        </AccountDataWrapper>
        </>
    );
};

export default Account;
