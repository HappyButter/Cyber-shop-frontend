import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import { ShippingWrapper } from './shippingForm.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { addAdress } from 'state/cart/cartActions';


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

const ShippingForm = ({handleNext, handleBack}) => {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [postcode, setPostcode] = useState('');
    const [street, setStreet] = useState('');
    const [building, setBuilding] = useState('');
    const [apartment, setApartment] = useState('');
    const [shippingMethod, setShippingMethod] = useState('');

    const dispatch = useDispatch();
    const classes = useStyles();
  
    const currentAddressState = useSelector(state => state.cart.address);

    useEffect( () => {
        setCountry(currentAddressState.country);
        setCity(currentAddressState.city);
        setPostcode(currentAddressState.postcode);
        setStreet(currentAddressState.street);
        setBuilding(currentAddressState.building);
        setApartment(currentAddressState.apartment);
        setShippingMethod(currentAddressState.shippingMethod);
    },[currentAddressState])

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addAdress({ country, postcode, city, street, building, apartment, shippingMethod }));
      handleNext();
    } 
  
    return (
      <ShippingWrapper component="main" maxWidth="xs">
        <div className={classes.paper}>
            <LocalShippingIcon fontSize="large"/>
          <form 
            className={classes.form} 
            onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                    value={country}
                    margin="normal"
                    required
                    fullWidth
                    variant="filled"
                    id="country"
                    label="Państwo"
                    name="country"
                    autoComplete="country"
                    autoFocus
                    onChange={(event) => setCountry(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    value={postcode}
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    name="postcode"
                    label="Kod pocztowy"
                    id="postcode"
                    autoComplete="postcode"
                    onChange={(event) => setPostcode(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    value={city}
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    name="post_town"
                    label="Miasto"
                    id="post_town"
                    autoComplete="post_town"
                    onChange={(event) => setCity(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    value={street}
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    name="street"
                    label="Ulica"
                    id="street"
                    autoComplete="street"
                    onChange={(event) => setStreet(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    value={building}
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    id="building"
                    label="Nr budynku"
                    name="building"
                    autoComplete="building"
                    autoFocus
                    onChange={(event) => setBuilding(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    value={apartment}
                    variant="filled"                    
                    margin="normal"
                    required
                    fullWidth
                    name="apartment"
                    label="Nr mieszkania"
                    id="apartment"
                    autoComplete="apartment"
                    onChange={(event) => setApartment(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <hr/>
                    <InputLabel id="shipping-label">Metoda dostawy</InputLabel>
                    <Select
                    labelId="shipping-label"
                    id="shipping"
                    fullWidth
                    value={shippingMethod}
                    onChange={e => setShippingMethod(e.target.value)}
                    >
                    <MenuItem value={1}>Gołąb [5 zł]</MenuItem>
                    <MenuItem value={2}>Sowa [10 zł]</MenuItem>
                    <MenuItem value={3}>Jastrząb ekspres [15 zł]</MenuItem>
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
      </ShippingWrapper>
    );
}

export default ShippingForm;