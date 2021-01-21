import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PaymentWrapper } from './paymentForm.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { addPaymentMethod } from 'state/cart/cartActions';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: theme.spacing(2),
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
  }));

const PaymentForm = ({handleNext, handleBack}) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const [paymentMethod, setPaymentMethod] = useState("Blik");

    const currentPaymentState = useSelector(state => state.cart.payment);

    useEffect( () => {
        setPaymentMethod(currentPaymentState || "Blik");
    },[currentPaymentState]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPaymentMethod({ paymentMethod }));
        handleNext();
    } 

    return (
        <PaymentWrapper component="main" maxWidth="xs">
          <div className={classes.paper}>
              <MonetizationOnIcon fontSize="large"/>
            <form 
              className={classes.form} 
              onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                  <Grid item xs={12}>
                      <hr/>
                      <InputLabel id="payment-label">Metoda płatności</InputLabel>
                      <Select
                      labelId="payment-label"
                      id="payment"
                      fullWidth
                      value={paymentMethod}
                      onChange={e => setPaymentMethod(e.target.value)}
                      >
                      <MenuItem value={"Karta"}>Karta</MenuItem>
                      <MenuItem value={"Gotówka przy odbiorze"}>Gotówka przy odbiorze</MenuItem>
                      <MenuItem value={"Blik"}>Blik</MenuItem>
                      </Select>
                      <hr/>
                  </Grid>
              </Grid>
            <div>
                <br/>
              <Button onClick={handleBack} 
                      className={classes.button}>
                  Back
              </Button>
  
              <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
              >
                  {'Next'}
              </Button>
              </div>
            </form>
          </div>
        </PaymentWrapper>
      );
}

export default PaymentForm;