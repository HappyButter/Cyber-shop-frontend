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
import { addAdress, getUserAddresses } from 'state/cart/cartActions';


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


const shippingMethods = [
  {
    price : 5,
    name : 'Gołąb [5 zł]'
  },
  {
    price : 10,
    name : 'Sowa [10 zł]'
  },  
  {
    price : 15,
    name : 'Jastrząb ekspres [15 zł]'
  }
]


const ShippingForm = ({handleNext, handleBack}) => {
    const [addressId, setAddressId] = useState(-1);
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [postcode, setPostcode] = useState('');
    const [street, setStreet] = useState('');
    const [building, setBuilding] = useState('');
    const [apartment, setApartment] = useState('');
    const [shippingMethod, setShippingMethod] = useState(shippingMethods[0].name);
    const [shippingValue, setShippingValue] = useState(shippingMethods[0].price);

    const [isCountryValid, setIsCountryValid] = useState(true);
    const [isPostcodeValid, setIsPostcodeValid] = useState(true);
    const [isCityValid, setIsCityValid] = useState(true);
    const [isStreetValid, setIsStreetValid] = useState(true);

    const dispatch = useDispatch();
    const classes = useStyles();
  
    const userId = useSelector(state => state.auth.user.id);
    const currentAddressState = useSelector(state => state.cart.address);
    const userAddresses = useSelector(state => state.cart.userAddresses);

    useEffect( () => {
        dispatch(getUserAddresses({userId}));
        setAddressId(currentAddressState.addressId || -1);
        setCountry(currentAddressState.country || '');
        setCity(currentAddressState.city || '');
        setPostcode(currentAddressState.postcode || '');
        setStreet(currentAddressState.street || '');
        setBuilding(currentAddressState.building || '');
        setApartment(currentAddressState.apartment || '');
        setShippingMethod(currentAddressState.shippingMethod || shippingMethods[0].name);
        setShippingValue(currentAddressState.shippingValue || shippingMethods[0].price);
    },[currentAddressState, dispatch, userId]);


    const validateCountry = () => {
      const regName = /[0-9]+/g;
      return ( !regName.test(country) && country.length > 2 )
    }

    const validatePostCode = () => {
      const regPhoneNumber = /[0-9]{2}-[0-9]{3}/;
      return (regPhoneNumber.test(postcode) && postcode.length === 6);
    }

    const validateCity = () => {
      const regName = /[0-9]+/g;
      return ( !regName.test(city) && city.length > 2 )
    }

    const validateStreet = () => {
      const regName = /[0-9]+/g;
      return ( !regName.test(street) && street.length > 2 )
    }

    const validate = () => {
      let isValid = validateCountry()
              && validatePostCode()
              && validateCity()
              && validateStreet();

      return isValid;
    }


    const handleSubmit = (e) => {
      e.preventDefault();

      if(validate()){
        dispatch(addAdress({ 
          addressId, 
          country, 
          postcode, 
          city, 
          street, 
          building, 
          apartment, 
          shippingMethod, 
          shippingValue }));
        handleNext();
      }else{
        alert("wpisz poprawny adres");
      }
    } 

    const handleExistingAddressSelect = ({addressId}) => {
      setAddressId(addressId);
      if(addressId !== -1){
        const address = userAddresses.filter(ad => ad.id === addressId)[0];
        setCountry(address.country || '');
        setCity(address.city || '');
        setPostcode(address.postcode || '');
        setStreet(address.street || '');
        setBuilding(address.building || '');
        setApartment(address.apartment || '');
      }else{
        setCountry('');
        setCity('');
        setPostcode('');
        setStreet('');
        setBuilding('');
        setApartment('');
      }
    } 

    const handleShippingChange = ({value}) => {
      const method = shippingMethods.filter(record => record.price === value);
      setShippingValue(value);
      setShippingMethod(method[0].name);
    }
  
    return (
      <ShippingWrapper component="main" maxWidth="xs">
        <div className={classes.paper}>
            <LocalShippingIcon fontSize="large"/>
          <form 
            className={classes.form} 
            onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                  <hr/>
                  <InputLabel id="shipping-label">Twoje adresy:</InputLabel>
                  <Select
                  labelId="shipping-label"
                  id="shipping"
                  fullWidth
                  value={addressId}
                  onChange={e => {
                    handleExistingAddressSelect({addressId:e.target.value});
                  }}
                  >
                    <MenuItem value={-1} key={-1}>{"Nowy Adres"}</MenuItem>
                    {userAddresses.map(address => (
                      <MenuItem value={address.id} key={address.id}>{address.city + ", " + address.street}</MenuItem>
                    ))}
                  </Select>
                  <hr/>
                </Grid>
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
                    onBlur={() => setIsCountryValid(validateCountry())}
                    helperText={isCountryValid ? null : "Państwo musi mieć co najmnije 3 znaki i nie powinno zawierać cyfr"}
                    error={!isCountryValid}
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
                    onBlur={ () => setIsPostcodeValid(validatePostCode())}
                    helperText={ isPostcodeValid ? null :"format: 12-123"}
                    error={!isPostcodeValid}
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
                    onBlur={() => setIsCityValid(validateCountry())}
                    helperText={isCityValid ? null : "Miasto musi mieć co najmnije 3 znaki i nie powinno zawierać cyfr"}
                    error={!isCityValid}
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
                    onBlur={() => setIsStreetValid(validateStreet())}
                    helperText={isStreetValid ? null : "Ulica musi mieć co najmnije 3 znaki i nie powinno zawierać cyfr"}
                    error={!isStreetValid}
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
                    onChange={(event) => setBuilding(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    value={apartment}
                    variant="filled"                    
                    margin="normal"
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
                    value={shippingValue}
                    onChange={e => handleShippingChange({value:e.target.value})}
                    >
                      {shippingMethods.map(method => (
                        <MenuItem value={method.price}>{method.name}</MenuItem>
                      ))}
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