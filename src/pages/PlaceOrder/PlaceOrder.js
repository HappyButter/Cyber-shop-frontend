import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import { Cart, ShippingForm, PaymentForm } from 'components';
import { Middlepane } from 'styles/Middlepane.css';
import { useDispatch, useSelector } from 'react-redux';
import './placeOrder.css';
import { placeOrder } from 'state/cart/cartActions';
import { Redirect } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));


const PlaceOrder = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [activeStep, setActiveStep] = React.useState(0);
  const [commentText, setCommentText] = React.useState('');
  const steps = ['Koszyk',
    'Dostawa',
    'Płatność',
    'I gotowe!'];

  const userId = useSelector(state => state.auth.user.id);
  const cart = useSelector(state => state.cart);

  const handleNext = () => {
    if (cart.productList.length > 0)
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const submitPlaceOrder = () => {
    dispatch(placeOrder({
      userId: userId,
      cart: cart,
      clientComments: commentText,
      enqueueSnackbar
    }));
    handleNext();
  }

  const handleNextSuper = () => {
    return (activeStep === 3
      ? submitPlaceOrder()
      : handleNext()
    )
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <h3>Twój Koszyk</h3>
            <ShoppingBasketIcon fontSize="large" />
            <br /><br />
            <Cart enqueueSnackbar={enqueueSnackbar} />
            <br /><br />
          </>
        )
      case 1:
        return (
          <>
            <h3>Dostawa</h3>
            <ShippingForm handleNext={handleNext} handleBack={handleBack} />
            <br /><br />
          </>
        );
      case 2:
        return (
          <>
            <h3>Płatność</h3>
            <PaymentForm handleNext={handleNext} handleBack={handleBack} />
            <br /><br />
          </>
        );
      case 3:
        return (
          <>
            <br />
            <textarea name="commentText" id="commentText" placeholder="Komentarz do zamówienia"
              onChange={(event) => setCommentText(event.target.value)} />
            <br />
            <h2>
              Do zapłaty:
              {" " + (parseFloat(cart.value) + parseFloat(cart.address.shippingValue)).toFixed(2) + " zł"}
            </h2>
          </>
        );
      case 4:
      default:
        return (<Redirect to="/" />);
    }
  }


  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}
        style={{ backgroundColor: "gray" }}>
        {steps.map((label, index) => {
          return (
            <Step key={label} >
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Middlepane>
        {getStepContent(activeStep)}
        {activeStep === 1 || activeStep === 2
          ? null
          : (<div>
            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
              Back
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={handleNextSuper}
              className={classes.button}
            >
              {activeStep === steps.length - 1 ? 'Złóż zamówienie' : 'Next'}
            </Button>
          </div>)
        }
      </Middlepane>
    </div>
  );
}

export default PlaceOrder;