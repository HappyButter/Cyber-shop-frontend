import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CategoriesBar, AppBar, Cart } from 'components';
import { Middlepane } from 'styles/Middlepane.css';

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

function getSteps() {
  return ['Koszyk', 'Dostawa', 'Płatność', 'I gotowe!'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          Twój Koszyk:
            <br/><br/>
            <Cart/>
            <br/><br/>
        </>
        )
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'aaa';
    case 3:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

const PlaceOrder = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <AppBar/>
      <CategoriesBar/>
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
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <Middlepane>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </Middlepane>
        )}
      </div>
    </div>
  );
}

export default PlaceOrder;